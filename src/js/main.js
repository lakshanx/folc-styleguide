// Main Menu
const $mainContent = $('.main-content');
const $mainNavBar = $('#main-navbar');
const $body = $('body');

$mainNavBar.on('show.bs.collapse', () => {
	$body.addClass('overflow-hidden');
	$mainContent.addClass('menu-opened');
});

$mainNavBar.on('hide.bs.collapse', () => {
	$body.removeClass('overflow-hidden');
	$mainContent.removeClass('menu-opened');
});

$mainNavBar.on('show.bs.dropdown', '.nav-item.dropdown', () => {
	const mainMenuHeight = $('.main-header').outerHeight();
	const bodyHeight = $body.outerHeight() - mainMenuHeight;
	$mainContent.addClass('menu-opened');
	document.documentElement.style.setProperty('--menu-height', `${mainMenuHeight}px`);
	document.documentElement.style.setProperty('--menu-overlay-height', `${bodyHeight}px`);
});

$mainNavBar.on('hide.bs.dropdown', '.nav-item.dropdown', () => {
	$mainContent.removeClass('menu-opened');
});

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
