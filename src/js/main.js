// Mobile menu
$('#main-navbar').on('show.bs.collapse', function () {
	$('body').addClass('main-navbar-visible');
});
$('#main-navbar').on('hide.bs.collapse', function () {
	$('body').removeClass('main-navbar-visible');
});

// Popovers
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
