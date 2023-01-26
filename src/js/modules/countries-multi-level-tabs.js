$(document).ready(function () {
	if ($('#countries-multi-level-tabs').length > 0) {
		const nav = $(this).find('.main-tabs');
		const tabElements = nav.find('li');

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

			const selectedTab = $(this).val();
			//const selectedContent = $(selectedTab).find('.categories-cols').html();
	
			// const classToAdd = `bg-${selectedTab.substring(10)}`; // get the text after "#category-"
			// $(this).removeClass(function (index, className) {
			// 	return (className.match(/\bbg-\S+/g) || []).join(' ');
			// }).addClass(classToAdd).addClass('text-white');
	
			// Append the relevant content from the .tab-pane .categories-cols element below the select element
			//var selectedCountry = $('#select-country').val();
			var selectedContent = $('.dropdown a[href="' + selectedCountry + '"]').closest('.dropdown').find('.dropdown-menu').html();
			$('#categories-select-content').html(selectedContent);

		});
	}
});
