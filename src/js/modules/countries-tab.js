$(document).ready(function () {
	$('.countries-tab').each(function () {
		const $currentCountriesTab = $(this);
		const isMultiLevel = $currentCountriesTab.hasClass('countries-tab--multi-level');

		const tabs = $currentCountriesTab.find('.nav-pills > li').map(function () {
			const $a = $(this).find('a');
			const continent = $a.text();
			const tabId = $a.attr('href').substring(1);
			const $tabContent = $(`#${tabId}`);
			const countries = $tabContent.find('li').map(function () {
				const $link = $(this).find('a');
				const href = $link.attr('href');
				const name = $link.text().split('(')[0].trim();
				const count = parseInt($link.text().split('(')[1].split(')')[0], 10);
				return { name, count, href };
			}).get();

			return { continent, countries };
		}).get();

		const $continentSelect = $currentCountriesTab.find('.select-continent');
		tabs.forEach((tab) => {
			const option = $('<option>').val(tab.continent).text(tab.continent);
			$continentSelect.append(option);
		});

		$continentSelect.on('change', function () {
			const continent = $continentSelect.val();
			const $countriesSelect = $currentCountriesTab.find('.select-country');
			$countriesSelect.prop('disabled', false);
			$countriesSelect.html('');

			const selectedTab = tabs.find((tab) => tab.continent === continent);
			selectedTab.countries.forEach((country) => {
				const option = $('<option>').val(isMultiLevel ? country.name : country.href).text(`${country.name} (${country.count})`);
				$countriesSelect.append(option);
			});
		});

		$currentCountriesTab.find('.countries-form').on('submit', function (e) {
			e.preventDefault();
			const selectedCountry = $currentCountriesTab.find('.select-country').val();

			if (isMultiLevel) {
				const selectedContent = $currentCountriesTab.find(`.dropdown .nav-link:contains('${selectedCountry}')`).closest('.dropdown').find('.dropdown-menu').html();
				$currentCountriesTab.find('.categories-select-content').html(selectedContent);
			} else {
				window.location.href = selectedCountry;
			}
		});
	});
});
