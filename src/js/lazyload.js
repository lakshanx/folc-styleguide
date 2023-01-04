import loadingAttributePolyfill from 'loading-attribute-polyfill/dist/loading-attribute-polyfill.module';

const checkLazyImages = () => {
	const lazyLoadAreas = document.querySelectorAll('noscript.loading-lazy');
	lazyLoadAreas.forEach((element) => loadingAttributePolyfill.prepareElement(element));

	const removeShimmer = (img) => {
		// eslint-disable-next-line no-param-reassign
		img.onload = null;
		const parent = img.closest('.bg-shimmer');
		parent.classList.add('bg-shimmer--loaded');
		setTimeout(() => {
			parent.classList.remove('bg-shimmer', 'bg-shimmer--loaded');
		}, 400);
	};

	document.querySelectorAll('.bg-shimmer img').forEach((img) => {
		if (img.complete) {
			removeShimmer(img);
		} else {
			// eslint-disable-next-line no-param-reassign
			img.onload = () => {
				removeShimmer(img);
			};
		}
	});
};

checkLazyImages();

window.checkLazyImages = checkLazyImages;
