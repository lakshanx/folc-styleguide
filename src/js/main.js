// Popovers
$(function () {
	$('[data-toggle="popover"]').popover();
});

// Stop auto closing of dropdowns with CSS class .avoid-auto-close
$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {
	e.stopPropagation();
});

//TODO: make it work and then move to its own js comp.
// Get the countries tab content element
let countriesTabContent = document.querySelector('#countries-tabContent');

// Get the countries form element
let countriesForm = document.querySelector('#countries-form');

// Add the countries tab content element as a child of the countries form element
//countriesForm.appendChild(countriesTabContent);

// countries tabs : TODO -WILL BE MOVED TO ITS OWN JS FILE.
// Create options for the first select element



const nav = document.querySelector("ul#countries-tab");
const tabElements = nav.querySelectorAll("li");

const tabs = Array.from(tabElements).map(tab => {
    const a = tab.querySelector("a");
    const continent = a.innerText;
    const tabId = a.getAttribute("href").substring(1);
    const countries = [];
    const tabContent = document.querySelector("#" + tabId);
    const tabCountries = tabContent.querySelectorAll("li");
    Array.from(tabCountries).forEach(li => {
        const a = li.querySelector("a");
        const href = li.querySelector("a").getAttribute("href");
        const name = a.innerText.split("(")[0].trim();
        const count = parseInt(a.innerText.split("(")[1].split(")")[0]);
        countries.push({ name, count, href });
    });
    return { continent, countries };
});
console.log(tabs);
console.log(tabs.continent);

const continentSelect = document.querySelector("#select-continent");
tabs.forEach(tab => {
  const option = document.createElement("option");
  option.value = tab.continent;
  option.text = tab.continent;
  continentSelect.appendChild(option);
});
continentSelect.addEventListener("change", populateCountries);

function populateCountries() {
  const continent = continentSelect.value;
  const countriesSelect = document.querySelector("#select-country");
  countriesSelect.disabled = false;
  countriesSelect.innerHTML = "";

  const tab2 = tabs.find(tab => tab.continent === continent);
  tab2.countries.forEach(country => {
	const option = document.createElement("option");
	option.value = country.href;
	option.text = `${country.name} (${country.count})`;
	countriesSelect.appendChild(option);
  });
}

document.getElementById("countries-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent the form from submitting
    var selectedCountry = document.getElementById("select-country").value;
    window.location.href = selectedCountry;
});




// let selectContinents = document.querySelector('#select-continent');
// let selectContinentsOptions = [
// 	{ value: 'option1', text: 'Option 1' },
// 	{ value: 'option2', text: 'Option 2' },
// 	{ value: 'option3', text: 'Option 3' },
// ];
// selectContinentsOptions.forEach(option => {
// 	let el = document.createElement('option');
// 	el.value = option.value;
// 	el.text = option.text;
// 	selectContinents.appendChild(el);
// });

// // Create options for the second select element
// let selectCountry = document.querySelector('#select-country');
// let selectCountryOptions = tabs;

// selectContinents.addEventListener('change', e => {
// 	// Clear the options in the second select element
// 	selectCountry.innerHTML = '';

// 	// Get the selected option value
// 	let selectedOption = e.target.value;

// 	// Add options to the second select element
// 	selectCountryOptions[selectedOption].forEach(option => {
// 		let el = document.createElement('option');
// 		el.value = option.value;
// 		el.text = option.text;
// 		selectCountry.appendChild(el);
// 	});
// });