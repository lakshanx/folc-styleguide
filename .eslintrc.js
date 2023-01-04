module.exports = {
	root: true,
	env: {
		browser: true,
		jquery: true,
	},
	extends: ['airbnb'],
	globals: {
		__DEV__: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			legacyDecorators: true,
		},
	},
	rules: {
		indent: [
			2,
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
		'linebreak-style': 0,
		'func-names': 0,
		'max-len': [
			2,
			{
				code: 120,
				tabWidth: 1,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		quotes: [2, 'single', 'avoid-escape'],
		'prefer-arrow-callback': 0,
		'react/destructuring-assignment': 0,
		'react/forbid-prop-types': 1,
		'class-methods-use-this': 0,
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
};
