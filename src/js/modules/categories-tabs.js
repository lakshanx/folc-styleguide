$(document).ready(function() {
    $('.categories-tabs .nav-link').click(function() {
        const className = $(this).attr('class').split(' ')[1]; // get the class that starts with "nav-link--"
        $('#categories-tabs-content').removeClass(function (index, className) {
            return (className.match (/(^|\s)bg-\S+/g) || []).join(' '); // remove any classes that start with "bg-"
        });
        $('#categories-tabs-content').addClass('bg-' + className.split('--')[1]); // add the class "bg-[className]" to #categories-tabs-content
    });

        var select = $('#select-categories');
        select.addClass('categories-select');
        
        // Loop through the existing nav-item elements to create new option elements
        $('.categories-tabs .nav-item').each(function() {
            var navItem = $(this);
            var option = $('<option>');
            option.val(navItem.find('a').attr('href'));
            option.text(navItem.find('a').text());
            select.append(option);
        });
        
        // When the select element is clicked
        select.on('change', function() {
            var selectedTab = $(this).val();
            var selectedContent = $(selectedTab).find('.categories-cols').html();

            // Append the relevant content from the .tab-pane .categories-cols element below the select element
            $('#categories-select-content').html(selectedContent);
            $('#categories-select-content a').addClass("with-prefix pb-1");

        });

});