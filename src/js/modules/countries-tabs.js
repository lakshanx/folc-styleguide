$(document).ready(function () {
	if ($('#countries-tab').length > 0) {
		const nav = document.querySelector('ul#countries-tab');
		const tabElements = nav.querySelectorAll('li');

		const tabs = Array.from(tabElements).map((tab) => {
			const a = tab.querySelector('a');
			const continent = a.innerText;
			const tabId = a.getAttribute('href').substring(1);
			const countries = [];
			const tabContent = document.querySelector(`#${tabId}`);
			const tabCountries = tabContent.querySelectorAll('li');
			Array.from(tabCountries).forEach((li) => {
				const link = li.querySelector('a');
				const href = li.querySelector('a').getAttribute('href');
				const name = link.innerText.split('(')[0].trim();
				const count = parseInt(link.innerText.split('(')[1].split(')')[0], 10);
				countries.push({ name, count, href });
			});
			return { continent, countries };
		});

		const continentSelect = document.querySelector('#select-continent');
		tabs.forEach((tab) => {
			const option = document.createElement('option');
			option.value = tab.continent;
			option.text = tab.continent;
			continentSelect.appendChild(option);
		});
		continentSelect.addEventListener('change', function () {
			const continent = continentSelect.value;
			const countriesSelect = document.querySelector('#select-country');
			countriesSelect.disabled = false;
			countriesSelect.innerHTML = '';

			const tab2 = tabs.find((tab) => tab.continent === continent);
			tab2.countries.forEach((country) => {
				const option = document.createElement('option');
				option.value = country.href;
				option.text = `${country.name} (${country.count})`;
				countriesSelect.appendChild(option);
			});
		});

		document.getElementById('countries-form').addEventListener('submit', function (e) {
			e.preventDefault();
			const selectedCountry = document.getElementById('select-country').value;
			window.location.href = selectedCountry;
		});
	}
});
