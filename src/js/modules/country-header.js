$(document).ready(function() {
// Function to handle the change event
	function handleChange() {
		const url = $(this).val();
		if (url) {
			window.location.href = url;
		}
	}

	// Function to initialize and customize the duplicated select element
	function initializeDuplicatedSelect($select) {
		$select.removeClass('text-uppercase text-gray mt-2')
			.addClass('d-md-none mb-2')
			.on('change', handleChange);
	}

	// Get the original .select-region element
	const $originalSelectRegion = $('.select-region');

	// Clone the .select-region element and initialize the duplicated element
	const $duplicatedSelectRegion = $originalSelectRegion.clone();
	initializeDuplicatedSelect($duplicatedSelectRegion);

	// Insert the duplicated .select-region element before the .categories-form element
	$duplicatedSelectRegion.insertBefore('.categories-form');
});
