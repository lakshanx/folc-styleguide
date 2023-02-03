// Mobile menu
const $mainContent = $('.main-content');
const $mainNavBar = $('#main-navbar');

$mainNavBar.on('show.bs.collapse', function () {
	$('body').addClass('main-navbar-visible');
});
$mainNavBar.on('hide.bs.collapse', function () {
	$('body').removeClass('main-navbar-visible');
});

$(document).on('show.bs.dropdown', $mainNavBar.find('.nav-item.dropdown'), function handleShowDropdown() {
	const bodyHeight = $('body').outerHeight() - 100;
	$mainContent.addClass('menu-opened');
	document.documentElement.style.setProperty('--menu-opened-height', `${bodyHeight}px`);
});

$(document).on('hide.bs.dropdown', $mainNavBar.find('.nav-item.dropdown'), function handleHideDropdown() {
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
