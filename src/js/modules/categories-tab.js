// Function to update the bg-* class and text-white class of the select element
function updateSelectBgClass($select) {
	const selectedTab = $select.val();
	if (selectedTab && selectedTab.includes('-')) {
		const bgClass = `bg-${selectedTab.split('-')[1]}`;
		$select.removeClass(function (index, className) {
			return (className.match(/(^|\s)(bg-\S+|text-white)/g) || []).join(' ');
		});
		$select.addClass(bgClass);
		$select.addClass('text-white arrow-white');
	}
}

$(document).ready(function () {
	const $categoriesTabs = $('.categories-tab');

	if ($categoriesTabs.length) {
		const $categoriesTabContent = $categoriesTabs.find('.categories-tab-content');
		const $select = $categoriesTabs.find('.select-categories');
		const $categoriesSelectContent = $categoriesTabs.find('.categories-select-content');

		// When a category tab is clicked
		$('.categories-tab .nav-link').click(function () {
			const className = $(this).attr('class').split(' ')[1];
			$categoriesTabContent.removeClass(function (index, bgClassName) {
				return (bgClassName.match(/(^|\s)bg-\S+/g) || []).join(' ');
			});
			$categoriesTabContent.addClass(`bg-${className.split('--')[1]}`);
		});

		// Adding options to the select element
		$('.categories-tab .nav-item').each(function () {
			const $navItem = $(this);
			const $option = $('<option>');
			$option.val($navItem.find('a').attr('href'));
			$option.text($navItem.find('a').text());
			$select.append($option);
		});

		// When the select element is changed
		$select.on('change', function () {
			const selectedTab = $(this).val();
			const selectedContent = $(selectedTab).find('.categories-cols').html();
			$categoriesSelectContent.html(selectedContent);
			$categoriesSelectContent.find('a').addClass('with-prefix pb-1');
			updateSelectBgClass($(this)); // Update the bg-* and text-white classes
		});

		// Set the initial bg-* and text-white classes for the select element
		updateSelectBgClass($select);
	}
});
