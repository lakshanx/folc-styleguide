// Main Menu
const $mainContent = $('.main-content');
const $mainNavBar = $('#main-navbar');
const $body = $('body');
const $mainHeader = $('.main-header');

function handleMenuOpen() {
	const mainMenuHeight = $mainHeader.outerHeight();
	const bodyHeight = $body.outerHeight() - mainMenuHeight;
	document.documentElement.style.setProperty('--menu-height', `${mainMenuHeight}px`);
	document.documentElement.style.setProperty('--menu-overlay-height', `${bodyHeight}px`);
	$body.addClass('overflow-hidden');
	$mainContent.addClass('menu-opened');
}

function handleMenuClose() {
	$body.removeClass('overflow-hidden');
	$mainContent.removeClass('menu-opened');
}

$mainNavBar.on('show.bs.collapse', handleMenuOpen);
$mainNavBar.on('hide.bs.collapse', handleMenuClose);
$mainNavBar.on('show.bs.dropdown', '.nav-item.dropdown', handleMenuOpen);
$mainNavBar.on('hide.bs.dropdown', '.nav-item.dropdown', handleMenuClose);

// PopoSvers
$(function () {
	$('[data-toggle="popover"]').popover();
});

// Stop auto closing of dropdowns with CSS class .avoid-auto-close
$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {
	e.stopPropagation();
});

if ($('.countries-tabs').length > 0) {
	import(/* webpackChunkName: 'countries-tabs' */ '~mod/countries-tabs');
}

if ($('.categories-tabs').length > 0) {
	import(/* webpackChunkName: 'categories-tabs' */ '~mod/categories-tabs');
}

if ($('.countries-multi-level-tabs').length > 0) {
	import(/* webpackChunkName: 'countries-multi-level-tabs' */ '~mod/countries-multi-level-tabs');
}

if ($('.article-tab').length > 0) {
	import(/* webpackChunkName: 'article-tab' */ '~mod/article-tab');
}
