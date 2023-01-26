// Popovers
$(function () {
	$('[data-toggle="popover"]').popover();
});

// Stop auto closing of dropdowns with CSS class .avoid-auto-close
$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {
	e.stopPropagation();
});

if ($('#countries-tab').length > 0) {
	import(/* webpackChunkName: 'countries-tabs' */ '~mod/countries-tabs');
}

if ($('#categories-tabs').length > 0) {
	import(/* webpackChunkName: 'categories-tabs' */ '~mod/categories-tabs');
}

if ($('#countries-multi-level-tabs').length > 0) {
	import(/* webpackChunkName: 'countries-multi-level-tabs' */ '~mod/countries-multi-level-tabs');
}
