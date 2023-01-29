$(document).ready(function () {
	const $categoriesTabs = $('.categories-tabs');
	const $categoriesTabContent = $('.categories-tabs-content');
	const $select = $('.select-categories');
	const $categoriesSelectContent = $('.categories-select-content');

	if ($categoriesTabs.length) {
		$('.categories-tabs .nav-link').click(function () {
			const className = $(this).attr('class').split(' ')[1];
			$categoriesTabContent.removeClass(function (index, bgClassName) {
				return (bgClassName.match(/(^|\s)bg-\S+/g) || []).join(' ');
			});
			$categoriesTabContent.addClass(`bg-${className.split('--')[1]}`);
		});

		$('.categories-tabs .nav-item').each(function () {
			const $navItem = $(this);
			const $option = $('<option>');
			$option.val($navItem.find('a').attr('href'));
			$option.text($navItem.find('a').text());
			$select.append($option);
		});

		$select.on('change', function () {
			const selectedTab = $(this).val();
			const selectedContent = $(selectedTab).find('.categories-cols').html();
			$categoriesSelectContent.html(selectedContent);
			$categoriesSelectContent.find('a').addClass('with-prefix pb-1');
		});
	}
});
