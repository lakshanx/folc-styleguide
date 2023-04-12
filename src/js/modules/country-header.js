$(document).ready(function () {
	// Function to handle the change event
	function handleChange() {
		const url = $(this).val();
		if (url) {
			window.location.href = url;
		}
	}

	// Get the original .select-region element
	const $originalSelectRegion = $('.select-region');

	// Clone the .select-region element and insert the duplicated element before the .categories-form element
	const $duplicatedSelectRegion = $originalSelectRegion.clone()
		.removeClass('text-uppercase text-gray mt-2')
		.addClass('d-md-none mb-2')
		.insertBefore('.categories-form');

	// Attach the handleChange function to both the original and duplicated select elements
	$originalSelectRegion.add($duplicatedSelectRegion).on('change', handleChange);
});
