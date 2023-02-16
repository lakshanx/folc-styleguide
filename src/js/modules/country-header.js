$(document).ready(function () {
	$('.country-header select').change(function () {
		const url = $(this).val();
		if (url) {
			window.location.href = url;
		}
	});
});
