// Main Menu
const $mainContent = $('.main-content');
const $mainNavBar = $('#main-navbar');
const $body = $('body');
const $mainHeader = $('.main-header');

function calculateHeaderCSSVars() {
	const mainMenuHeight = $mainHeader.outerHeight();
	const bodyHeight = $body.outerHeight() - mainMenuHeight;
	document.documentElement.style.setProperty('--menu-height', `${mainMenuHeight}px`);
	document.documentElement.style.setProperty('--menu-overlay-height', `${bodyHeight}px`);
}

function handleMenuOpen() {
	calculateHeaderCSSVars();
	$mainContent.addClass('menu-opened');
}
function handleMenuClose() {
	$mainContent.removeClass('menu-opened');
}
function handleMobileMenuOpen() {
	calculateHeaderCSSVars();
	$body.addClass('overflow-hidden');
	$mainContent.addClass('menu-opened');
}
function handleMobileMenuClose() {
	if ($body.hasClass('overflow-hidden')) {
		$body.removeClass('overflow-hidden');
	}
	$mainContent.removeClass('menu-opened');
}

$mainNavBar.on('show.bs.collapse', handleMobileMenuOpen);
$mainNavBar.on('hide.bs.collapse', handleMobileMenuClose);
$mainNavBar.on('show.bs.dropdown', '.nav-item.dropdown', handleMenuOpen);
$mainNavBar.on('hide.bs.dropdown', '.nav-item.dropdown', handleMenuClose);

// Sticky menu

let lastScrollTop = 0;

function updateMarginTop() {
	if ($(window).innerWidth() < 768) {
		$mainContent.css('margin-top', `${$mainHeader.outerHeight()}px`);
	} else {
		$mainContent.css('margin-top', '0');
	}
}

function handleScroll() {
	const currentScrollTop = $(window).scrollTop();

	if (window.matchMedia('(max-width: 767px)').matches) {
		// Only apply sticky header behavior on mobile devices
		if (currentScrollTop < lastScrollTop) {
			// Scrolling up
			$mainHeader.addClass('sticky');
			$mainHeader.addClass('sticky-visible');
			updateMarginTop();
		} else {
			// Scrolling down
			if (currentScrollTop > $mainHeader.outerHeight()) {
				$mainHeader.removeClass('sticky-visible');
			}

			// Remove sliding animation
			setTimeout(() => {
				if (currentScrollTop <= 0) {
					$mainHeader.removeClass('sticky');
					updateMarginTop();
				}
			}, 400);
		}
		lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
	} else {
		// Reset header behavior on non-mobile devices
		$mainHeader.removeClass('sticky');
		$mainHeader.removeClass('sticky-visible');
		$mainContent.css('margin-top', '0');
	}
}
$(window).on('scroll', handleScroll);
$(window).on('resize', updateMarginTop);

// Stop auto closing of dropdowns with CSS class .avoid-auto-close
$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {
	e.stopPropagation();
});

if ($('.countries-tab').length > 0) {
	import(/* webpackChunkName: 'countries-tab' */ '~mod/countries-tab');
}

if ($('.categories-tab').length > 0) {
	import(/* webpackChunkName: 'categories-tab' */ '~mod/categories-tab');
}

if ($('.article-tab').length > 0) {
	import(/* webpackChunkName: 'article-tab' */ '~mod/article-tab');
}

if ($('.country-header').length > 0) {
	import(/* webpackChunkName: 'country-header' */ '~mod/country-header');
}
