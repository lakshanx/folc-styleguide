$(document).ready(function() {
    $('.categories-tabs .nav-link').click(function() {
        const className = $(this).attr('class').split(' ')[1]; // get the class that starts with "nav-link--"
        $('#categories-tabs-content').removeClass(function (index, className) {
            return (className.match (/(^|\s)bg-\S+/g) || []).join(' '); // remove any classes that start with "bg-"
        });
        $('#categories-tabs-content').addClass('bg-' + className.split('--')[1]); // add the class "bg-[className]" to #categories-tabs-content
    });
});