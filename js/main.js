/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

eval("// Popovers\n$(function () {\n  $('[data-toggle=\"popover\"]').popover();\n}); // Stop auto closing of dropdowns with CSS class .avoid-auto-close\n\n$(document).on('click', '.avoid-auto-close.dropdown-menu', function (e) {\n  e.stopPropagation();\n}); //TODO: make it work and then move to its own js comp.\n// Get the countries tab content element\n\nvar countriesTabContent = document.querySelector('#countries-tabContent'); // Get the countries form element\n\nvar countriesForm = document.querySelector('#countries-form'); // Add the countries tab content element as a child of the countries form element\n//countriesForm.appendChild(countriesTabContent);\n// countries tabs : TODO -WILL BE MOVED TO ITS OWN JS FILE.\n// Create options for the first select element\n\nvar nav = document.querySelector(\"ul#countries-tab\");\nvar tabElements = nav.querySelectorAll(\"li\");\nvar tabs = Array.from(tabElements).map(function (tab) {\n  var a = tab.querySelector(\"a\");\n  var continent = a.innerText;\n  var tabId = a.getAttribute(\"href\").substring(1);\n  var countries = [];\n  var tabContent = document.querySelector(\"#\" + tabId);\n  var tabCountries = tabContent.querySelectorAll(\"li\");\n  Array.from(tabCountries).forEach(function (li) {\n    var a = li.querySelector(\"a\");\n    var href = li.querySelector(\"a\").getAttribute(\"href\");\n    var name = a.innerText.split(\"(\")[0].trim();\n    var count = parseInt(a.innerText.split(\"(\")[1].split(\")\")[0]);\n    countries.push({\n      name: name,\n      count: count,\n      href: href\n    });\n  });\n  return {\n    continent: continent,\n    countries: countries\n  };\n});\nconsole.log(tabs);\nconsole.log(tabs.continent);\nvar continentSelect = document.querySelector(\"#select-continent\");\ntabs.forEach(function (tab) {\n  var option = document.createElement(\"option\");\n  option.value = tab.continent;\n  option.text = tab.continent;\n  continentSelect.appendChild(option);\n});\ncontinentSelect.addEventListener(\"change\", populateCountries);\n\nfunction populateCountries() {\n  var continent = continentSelect.value;\n  var countriesSelect = document.querySelector(\"#select-country\");\n  countriesSelect.disabled = false;\n  countriesSelect.innerHTML = \"\";\n  var tab2 = tabs.find(function (tab) {\n    return tab.continent === continent;\n  });\n  tab2.countries.forEach(function (country) {\n    var option = document.createElement(\"option\");\n    option.value = country.href;\n    option.text = \"\".concat(country.name, \" (\").concat(country.count, \")\");\n    countriesSelect.appendChild(option);\n  });\n}\n\ndocument.getElementById(\"countries-form\").addEventListener(\"submit\", function (e) {\n  e.preventDefault(); // prevent the form from submitting\n\n  var selectedCountry = document.getElementById(\"select-country\").value;\n  window.location.href = selectedCountry;\n}); // let selectContinents = document.querySelector('#select-continent');\n// let selectContinentsOptions = [\n// \t{ value: 'option1', text: 'Option 1' },\n// \t{ value: 'option2', text: 'Option 2' },\n// \t{ value: 'option3', text: 'Option 3' },\n// ];\n// selectContinentsOptions.forEach(option => {\n// \tlet el = document.createElement('option');\n// \tel.value = option.value;\n// \tel.text = option.text;\n// \tselectContinents.appendChild(el);\n// });\n// // Create options for the second select element\n// let selectCountry = document.querySelector('#select-country');\n// let selectCountryOptions = tabs;\n// selectContinents.addEventListener('change', e => {\n// \t// Clear the options in the second select element\n// \tselectCountry.innerHTML = '';\n// \t// Get the selected option value\n// \tlet selectedOption = e.target.value;\n// \t// Add options to the second select element\n// \tselectCountryOptions[selectedOption].forEach(option => {\n// \t\tlet el = document.createElement('option');\n// \t\tel.value = option.value;\n// \t\tel.text = option.text;\n// \t\tselectCountry.appendChild(el);\n// \t});\n// });\n\n//# sourceURL=webpack://folc-styleguide/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;