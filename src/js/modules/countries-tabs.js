$(document).ready(function () {
	const $countriesTabs = $('.countries-tabs');
	if ($countriesTabs.length > 0) {
		const $nav = $countriesTabs.find('.nav-pills');
		const $tabElements = $nav.find('li');

		const tabs = $tabElements.map(function () {
			const $a = $(this).find('a');
			const continent = $a.text();
			const tabId = $a.attr('href').substring(1);
			const countries = [];
			const $tabContent = $(`#${tabId}`);
			const $tabCountries = $tabContent.find('li');
			$tabCountries.each(function () {
				const $link = $(this).find('a');
				const href = $link.attr('href');
				const name = $link.text().split('(')[0].trim();
				const count = parseInt($link.text().split('(')[1].split(')')[0], 10);
				countries.push({ name, count, href });
			});
			return { continent, countries };
		});

		const $continentSelect = $('#select-continent');
		tabs.each(function () {
			const option = $('<option>').val(this.continent).text(this.continent);
			$continentSelect.append(option);
		});
		$continentSelect.on('change', function () {
			const continent = $continentSelect.val();
			const $countriesSelect = $('#select-country');
			$countriesSelect.prop('disabled', false);
			$countriesSelect.html('');

			const tab2 = tabs.filter(function () {
				return this.continent === continent;
			});
			tab2[0].countries.forEach(function (country) {
				const option = $('<option>').val(country.href).text(`${country.name} (${country.count})`);
				$countriesSelect.append(option);
			});
		});

		$('.countries-form').submit(function (e) {
			e.preventDefault();
			const selectedCountry = $('#select-country').val();
			window.location.href = selectedCountry;
		});
	}
});
