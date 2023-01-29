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

eval("$(document).ready(function () {\n  var countriesMultiLevelTabs = $('#countries-multi-level-tabs');\n\n  if (countriesMultiLevelTabs.length > 0) {\n    var mainTabs = countriesMultiLevelTabs.find('.main-tabs');\n    var tabElements = mainTabs.find('li');\n    var tabs = Array.from(tabElements).map(function (tab) {\n      var a = tab.querySelector('a');\n      var continent = a.innerText;\n      var tabId = a.getAttribute('href').substring(1);\n      var countries = [];\n      var tabContent = document.querySelector(\"#\".concat(tabId));\n      var tabCountries = tabContent.querySelectorAll('li');\n      Array.from(tabCountries).forEach(function (li) {\n        var link = li.querySelector('a');\n        var href = link.getAttribute('href');\n        var name = link.innerText.split('(')[0].trim();\n        var count = parseInt(link.innerText.split('(')[1].split(')')[0], 10);\n        countries.push({\n          name: name,\n          count: count,\n          href: href\n        });\n      });\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n    var continentSelect = countriesMultiLevelTabs.find('#select-continent');\n    tabs.forEach(function (tab) {\n      var option = document.createElement('option');\n      option.value = tab.continent;\n      option.text = tab.continent;\n      continentSelect.append(option);\n    });\n    continentSelect.on('change', function () {\n      var continent = this.value;\n      var countriesSelect = countriesMultiLevelTabs.find('#select-country');\n      countriesSelect.prop('disabled', false);\n      countriesSelect.html('');\n      var selectedTab = tabs.find(function (tab) {\n        return tab.continent === continent;\n      });\n      selectedTab.countries.forEach(function (country) {\n        var option = document.createElement('option');\n        option.value = country.name;\n        option.text = \"\".concat(country.name, \" (\").concat(country.count, \")\");\n        countriesSelect.append(option);\n      });\n    });\n    countriesMultiLevelTabs.find('#countries-form').on('submit', function (e) {\n      e.preventDefault();\n      var selectedCountry = countriesMultiLevelTabs.find('#select-country').val();\n      var selectedContent = countriesMultiLevelTabs.find(\".dropdown .nav-link:contains('\".concat(selectedCountry, \"')\")).closest('.dropdown').find('.dropdown-menu').html();\n      countriesMultiLevelTabs.find('#categories-select-content').html(selectedContent);\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-multi-level-tabs.js?");

/***/ })

}]);