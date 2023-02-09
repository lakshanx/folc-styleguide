$(document).ready(function () {
	const $countriesTabs = $('.countries-tabs');

	function extractCountriesInfo($tabCountries) {
		return $tabCountries.map(function () {
			const $link = $(this).find('a');
			const href = $link.attr('href');
			const name = $link.text().split('(')[0].trim();
			const count = parseInt($link.text().split('(')[1].split(')')[0], 10);

			return { name, count, href };
		}).get();
	}

	function extractTabsInfo($currentCountriesTab) {
		const $nav = $currentCountriesTab.find('.nav-pills');
		const $tabElements = $nav.find('li');

		return $tabElements.map(function () {
			const $a = $(this).find('a');
			const continent = $a.text();
			const tabId = $a.attr('href').substring(1);
			const $tabContent = $(`#${tabId}`);
			const $tabCountries = $tabContent.find('li');
			const countries = extractCountriesInfo($tabCountries);

			return { continent, countries };
		});
	}

	function populateContinentSelect($continentSelect, tabs) {
		tabs.each(function () {
			const option = $('<option>').val(this.continent).text(this.continent);
			$continentSelect.append(option);
		});
	}

	function handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab) {
		$continentSelect.on('change', function () {
			const continent = $continentSelect.val();
			const $countriesSelect = $currentCountriesTab.find('.select-country');

			$countriesSelect.prop('disabled', false);
			$countriesSelect.html('');

			const tab = tabs.filter(function () {
				return this.continent === continent;
			})[0];

			tab.countries.forEach(function (country) {
				const option = $('<option>').val(country.href).text(`${country.name} (${country.count})`);
				$countriesSelect.append(option);
			});
		});
	}

	function handleFormSubmit($currentCountriesTab) {
		$currentCountriesTab.find('.countries-form').submit(function (e) {
			e.preventDefault();
			const selectedCountry = $currentCountriesTab.find('.select-country').val();
			window.location.href = selectedCountry;
		});
	}

	$countriesTabs.each(function () {
		const $currentCountriesTab = $(this);
		const tabs = extractTabsInfo($currentCountriesTab);
		const $continentSelect = $currentCountriesTab.find('.select-continent');

		populateContinentSelect($continentSelect, tabs);
		handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab);
		handleFormSubmit($currentCountriesTab);
	});
});
