// Popovers
$(function () {
	$('[data-toggle="popover"]').popover();
});

// Stop auto closing of dropdowns with CSS class .avoid-auto-close
$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {
	e.stopPropagation();
});
