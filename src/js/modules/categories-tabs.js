$(document).ready(function () {
	$('.categories-tabs .nav-link').click(function () {
		const className = $(this).attr('class').split(' ')[1]; // get the class that starts with "nav-link--"
		$('#categories-tabs-content').removeClass(function (index, bgClassName) {
			return (bgClassName.match(/(^|\s)bg-\S+/g) || []).join(' '); // remove any classes that start with "bg-"
		});
		$('#categories-tabs-content').addClass(`bg-${className.split('--')[1]}`); // add the class "bg-[className]" to #categories-tabs-content
	});

	const select = $('#select-categories');
	// Loop through the existing nav-item elements to create new option elements
	$('.categories-tabs .nav-item').each(function () {
		const navItem = $(this);
		const option = $('<option>');
		option.val(navItem.find('a').attr('href'));
		option.text(navItem.find('a').text());
		select.append(option);
	});

	// When the select element is clicked
	select.on('change', function () {
		const selectedTab = $(this).val();
		const selectedContent = $(selectedTab).find('.categories-cols').html();

		// const classToAdd = `bg-${selectedTab.substring(10)}`; // get the text after "#category-"
		// $(this).removeClass(function (index, className) {
		// 	return (className.match(/\bbg-\S+/g) || []).join(' ');
		// }).addClass(classToAdd).addClass('text-white');

		// Append the relevant content from the .tab-pane .categories-cols element below the select element
		$('#categories-select-content').html(selectedContent);
		$('#categories-select-content a').addClass('with-prefix pb-1');
	});
});
