/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfolc_styleguide"] = self["webpackChunkfolc_styleguide"] || []).push([["countries-multi-level-tabs"],{

/***/ "./src/js/modules/countries-multi-level-tabs.js":
/*!******************************************************!*\
  !*** ./src/js/modules/countries-multi-level-tabs.js ***!
  \******************************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  if ($('#countries-multi-level-tabs').length > 0) {\n    var nav = $(this).find('.main-tabs');\n    var tabElements = nav.find('li');\n    var tabs = Array.from(tabElements).map(function (tab) {\n      var a = tab.querySelector('a');\n      var continent = a.innerText;\n      var tabId = a.getAttribute('href').substring(1);\n      var countries = [];\n      var tabContent = document.querySelector(\"#\".concat(tabId));\n      var tabCountries = tabContent.querySelectorAll('li');\n      Array.from(tabCountries).forEach(function (li) {\n        var link = li.querySelector('a');\n        var href = li.querySelector('a').getAttribute('href');\n        var name = link.innerText.split('(')[0].trim();\n        var count = parseInt(link.innerText.split('(')[1].split(')')[0], 10);\n        countries.push({\n          name: name,\n          count: count,\n          href: href\n        });\n      });\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n    var continentSelect = document.querySelector('#select-continent');\n    tabs.forEach(function (tab) {\n      var option = document.createElement('option');\n      option.value = tab.continent;\n      option.text = tab.continent;\n      continentSelect.appendChild(option);\n    });\n    continentSelect.addEventListener('change', function () {\n      var continent = continentSelect.value;\n      var countriesSelect = document.querySelector('#select-country');\n      countriesSelect.disabled = false;\n      countriesSelect.innerHTML = '';\n      var tab2 = tabs.find(function (tab) {\n        return tab.continent === continent;\n      });\n      tab2.countries.forEach(function (country) {\n        var option = document.createElement('option');\n        option.value = country.name;\n        option.text = \"\".concat(country.name, \" (\").concat(country.count, \")\");\n        countriesSelect.appendChild(option);\n      });\n    });\n    document.getElementById('countries-form').addEventListener('submit', function (e) {\n      e.preventDefault();\n      var selectedCountry = document.getElementById('select-country').value;\n      var selectedContent = $(\".dropdown .nav-link:contains('\" + selectedCountry + \"')\").closest('.dropdown').find('.dropdown-menu').html();\n      $('#categories-select-content').html(selectedContent);\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-multi-level-tabs.js?");

/***/ })

}]);