const {
	src, dest, watch, parallel, task, series,
} = require('gulp');
const browserSync = require('browser-sync');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
// eslint-disable-next-line import/no-extraneous-dependencies
const nodeSass = require('sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const critical = require('critical').stream;
const cleancss = require('gulp-clean-css');
const replace = require('gulp-replace');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const cssDir = 'dist/css';
const jsDir = 'dist/js';

const files = {
	index: ['src/docs/index.hbs'],
	hbs: ['src/docs/**/*.hbs', '!src/docs/index.hbs'],
	partials: ['src/partials/**/*.hbs'],
	js: ['dist/js/**/*'],
	vendorJs: ['src/js/vendor/*'],
	allScss: ['src/scss/**/*', '!src/scss/critical-css/*.scss'],
	scss: ['src/scss/*.scss'],
	criticalScss: ['src/critical-css/*.css'],
	icons: ['images/icons/*'],
	static: [
		// fonts
		'fonts/*.svg',
		'fonts/*.ttf',
		'fonts/*.woff',
		'fonts/*.woff2',
		// images
		'images/*',
	],
};

function errorHandler(err) {
	console.log(err); // eslint-disable-line
	this.emit('end');
}

const titleCase = (str) => {
	const split = str.toLowerCase().split('-');
	for (let i = 0; i < split.length; i += 1) {
		split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);
	}
	return split.join(' ');
};

const hbsHelpers = {
	titleCase,
	eq: (a, b) => a === b,
	gt: (a, b) => a > b,
	minus: (a, b) => a - b,
	times: (n, block) => {
		let accum = '';
		for (let i = 1; i <= n; i += 1) {
			block.data.index = i; // eslint-disable-line no-param-reassign
			block.data.first = i === 1; // eslint-disable-line no-param-reassign
			block.data.last = i === n; // eslint-disable-line no-param-reassign
			accum += block.fn(i);
		}
		return accum;
	},
};

const hbsVars = {
	imageUrl: '/folc-styleguide/images',
	jsUrl: '/folc-styleguide/js',
	cssUrl: '/folc-styleguide/css',
	criticalUrl: '/folc-styleguide/critical-css',
};

const indexFile = function () {
	const base = 'src/docs';
	const folders = ['core', 'components', 'compounds', 'sections', 'templates', 'criticals'];
	const filenames = {};
	folders.forEach((f) => {
		const names = fs.readdirSync(`${base}/${f}`)
			.filter((file) => path.extname(file) === '.hbs')
			.map((file) => {
				const name = file.replace('.hbs', '');
				return { name: titleCase(name), path: `${f}/${name}.html` };
			});
		filenames[f] = names;
	});
	const core = 'Core & Components';
	folders.splice(0, 2, core);
	const result = {
		...hbsVars,
		folders,
		filenames: { [core]: [...filenames.core, ...filenames.components], ...filenames },
	};
	return src(files.index)
		.pipe(handlebars(result, { helpers: hbsHelpers }))
		.pipe(rename({ extname: '.html' }))
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
};

const getSvg = (attrs = {}, folder = 'images') => {
	if (attrs.src && attrs.src !== '') {
		let svg;
		try {
			svg = fs.readFileSync(`${folder}/${attrs.src}`, { encoding: 'utf8' });
		} catch (error) {
			console.log('Inject SVG error:', `${folder}/${attrs.src}`);
			return '';
		}
		svg = cheerio.load(svg);
		Object.keys(attrs).forEach((attr) => {
			if (!['src', 'replace-to-svg'].includes(attr)) {
				svg('svg').attr(attr, attrs[attr]);
			}
		});
		return svg('svg').prop('outerHTML');
	}
	return '';
};

const hbsFiles = function () {
	const svgIcons = fs.readdirSync('images/icons')
		.filter((file) => path.extname(file) === '.svg')
		.map((file) => file.replace('.svg', ''));

	return src(files.hbs)
		.pipe(handlebars({ ...hbsVars, svgIcons }, { batch: ['src/partials'], helpers: hbsHelpers }))
		.pipe(rename({ extname: '.html' }))
		.pipe(replace(/<img[^>]*?replace-to-svg[^>]*?>/gi, (match) => {
			const img = cheerio.load(match);
			const attrs = img('img').attr();
			const result = getSvg(attrs);
			return result === '' ? match : result;
		}))
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
};

const jsFiles = function () {
	return src(files.js)
		.pipe(browserSync.stream());
};

const vendorJsFiles = function () {
	return src(files.vendorJs)
		.pipe(dest(jsDir))
		.pipe(browserSync.stream());
};

const scssFiles = function () {
	return src(files.scss)
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: ['node_modules/'],
			outputStyle: 'compressed',
			functions: {
				'asset-url($filename)': function (filename) { return new nodeSass.types.String(`'/folc-styleguide/images/${filename.getValue()}'`); },
				'font-url($filename)': function (filename) { return new nodeSass.types.String(`'/folc-styleguide/fonts/${filename.getValue()}'`); },
				'icon-svg($filename, $color: "#000", $size: "1em")': function (filename, color, size) {
					const fill = color.getValue().replace('#', '%23');
					const svg = getSvg({ src: filename.getValue(), height: size.getValue() }, 'images/icons')
						.replace(/fill=".*"/g, '')
						.replace(/<path/g, `<path fill="${fill}"`)
						.replace(/'/g, '"')
						.replace(/\n/g, '');
					return new nodeSass.types.String(`'data:image/svg+xml;utf8,${svg}'`);
				},
			},
		}).on('error', errorHandler))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('.'))
		.pipe(dest(cssDir))
		.pipe(browserSync.stream());
};

const criticalFiles = function () {
	return src(files.criticalScss)
		.pipe(dest('dist/critical-css'))
		.pipe(browserSync.stream());
};

const staticFiles = function () {
	return src(files.static, { base: '.' })
		.pipe(dest('dist'))
		.pipe(browserSync.stream());
};

const extractCriticalCss = function () {
	return src(['dist/criticals/*.html'])
		.pipe(
			critical({
				base: 'dist/',
				css: ['css/main.css'],
				dimensions: [
					{
						height: 667,
						width: 375,
					},
				],
				minify: false,
				ignore: {
					atrule: ['@font-face'],
					rule: [/:root/],
				},
			}),
		)
		.pipe(cleancss({
			format: 'keep-breaks',
			level: 2,
		}))
		.on('error', (err) => {
			console.error(err.message);
		})
		.pipe(dest('src/critical-css'));
};

const webpackBuild = (isWatch = false) => function () {
	return new Promise((resolve, reject) => {
		webpack({ ...webpackConfig, watch: isWatch }, (err, stats) => {
			if (err) {
				return reject(err);
			}
			if (stats.hasErrors()) {
				return reject(new Error(stats.compilation.errors.join('\n')));
			}
			return resolve();
		});
	});
};

const watchFiles = function (done) {
	watch(files.allScss, scssFiles);
	watch(files.index, indexFile);
	watch(files.hbs, hbsFiles)
		.on('add', indexFile)
		.on('unlink', indexFile);
	watch(files.partials, hbsFiles);
	watch(files.icons, hbsFiles);
	watch(files.js, jsFiles);
	watch(files.vendorJs, vendorJsFiles);
	watch(files.static, staticFiles);
	watch(files.criticalScss, criticalFiles);
	done();
};

const initServer = function (done) {
	browserSync.init({
		server: './dist',
		port: 8080,
		middleware: [
			function (req, res, next) {
				// Handling URL for CSS files
				if (req.url.indexOf('/folc-styleguide') === 0) {
					req.url = req.url.replace(/^(\/folc-styleguide)/, '');
				}
				next();
			},
		],
	});
	done();
};

const clean = () => del(['dist']);

task(clean);
task(indexFile);
task(scssFiles);
task(initServer);
task(extractCriticalCss);
task('webpack', webpackBuild());
task('webpackWatch', webpackBuild(true));
task(
	'build',
	parallel(indexFile, hbsFiles, vendorJsFiles, staticFiles, scssFiles, criticalFiles, 'webpack'),
);
task('watch', series(
	parallel(indexFile, hbsFiles, vendorJsFiles, staticFiles, scssFiles, criticalFiles, 'webpackWatch'),
	watchFiles,
));
task('default', series('clean', 'watch', 'initServer'));

// mediawiki
const webpackMediawikiConfig = require('./webpack.mediawiki.config');

const createMediawikiFolder = function () {
	return src('*.*', { read: false })
		.pipe(dest('src/mediawiki'));
};

const replaceImagePath = function () {
	return src('dist/css/main.css')
		.pipe(replace(/\/folc-styleguide\/images\//g, 'https://nativ.ee/skins/Folc/images/'))
		.pipe(dest('src/mediawiki'));
};

const webpackMediawikiBuild = function () {
	return new Promise((resolve, reject) => {
		webpack(webpackMediawikiConfig, (err, stats) => {
			if (err) {
				return reject(err);
			}
			if (stats.hasErrors()) {
				return reject(new Error(stats.compilation.errors.join('\n')));
			}
			return resolve();
		});
	});
};

task('mediawiki', series(createMediawikiFolder, replaceImagePath, webpackMediawikiBuild));
