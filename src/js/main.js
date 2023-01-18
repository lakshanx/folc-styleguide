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



$(document).ready(function() {
    $('.categories-tabs .nav-link').click(function() {
        var className = $(this).attr('class').split(' ')[1]; // get the class that starts with "nav-link--"
        $('.nav-link').removeClass('active'); // remove the active class from all tabs
        $(this).addClass('active'); // add the active class to the clicked tab
        $('#categories-tabs-content').removeClass(function (index, className) {
            return (className.match (/(^|\s)bg-\S+/g) || []).join(' '); // remove any classes that start with "bg-"
        });
        $('#categories-tabs-content').addClass('bg-' + className.split('--')[1]); // add the class "bg-[className]" to #categories-tabs-content
    });
});