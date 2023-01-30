$(document).ready(function () {
	const countriesMultiLevelTabs = $('.countries-multi-level-tabs');

	if (countriesMultiLevelTabs.length > 0) {
		const mainTabs = countriesMultiLevelTabs.find('.main-tabs');
		const tabElements = mainTabs.find('li');
		const continentSelect = countriesMultiLevelTabs.find('.select-continent');

		const tabs = Array.from(tabElements).map((tab) => {
			const a = tab.querySelector('a');
			const continent = a.innerText;
			const tabId = a.getAttribute('href').substring(1);
			const countries = [];
			const tabContent = document.querySelector(`#${tabId}`);
			const tabCountries = tabContent.querySelectorAll('li');
			Array.from(tabCountries).forEach((li) => {
				const link = li.querySelector('a');
				const href = link.getAttribute('href');
				const name = link.innerText.split('(')[0].trim();
				const count = parseInt(link.innerText.split('(')[1].split(')')[0], 10);
				countries.push({ name, count, href });
			});
			return { continent, countries };
		});

		tabs.forEach((tab) => {
			const option = document.createElement('option');
			option.value = tab.continent;
			option.text = tab.continent;
			continentSelect.append(option);
		});
		continentSelect.on('change', function () {
			const continent = this.value;
			const countriesSelect = countriesMultiLevelTabs.find('.select-country');
			countriesSelect.prop('disabled', false);
			countriesSelect.html('');

			const selectedTab = tabs.find((tab) => tab.continent === continent);
			selectedTab.countries.forEach((country) => {
				const option = document.createElement('option');
				option.value = country.name;
				option.text = `${country.name} (${country.count})`;
				countriesSelect.append(option);
			});
		});

		countriesMultiLevelTabs.find('.countries-form').on('submit', function (e) {
			e.preventDefault();
			const selectedCountry = countriesMultiLevelTabs.find('.select-country').val();
			const selectedContent = countriesMultiLevelTabs.find(`.dropdown .nav-link:contains('${selectedCountry}')`).closest('.dropdown').find('.dropdown-menu').html();
			countriesMultiLevelTabs.find('.categories-select-content').html(selectedContent);
		});
	}
});
