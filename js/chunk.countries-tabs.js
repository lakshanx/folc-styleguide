/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfolc_styleguide"] = self["webpackChunkfolc_styleguide"] || []).push([["countries-tabs"],{

/***/ "./src/js/modules/countries-tabs.js":
/*!******************************************!*\
  !*** ./src/js/modules/countries-tabs.js ***!
  \******************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  var $countriesTabs = $('.countries-tabs');\n\n  function extractCountriesInfo($tabCountries) {\n    return $tabCountries.map(function () {\n      var $link = $(this).find('a');\n      var href = $link.attr('href');\n      var name = $link.text().split('(')[0].trim();\n      var count = parseInt($link.text().split('(')[1].split(')')[0], 10);\n      return {\n        name: name,\n        count: count,\n        href: href\n      };\n    }).get();\n  }\n\n  function extractTabsInfo($currentCountriesTab) {\n    var $nav = $currentCountriesTab.find('.nav-pills');\n    var $tabElements = $nav.find('li');\n    return $tabElements.map(function () {\n      var $a = $(this).find('a');\n      var continent = $a.text();\n      var tabId = $a.attr('href').substring(1);\n      var $tabContent = $(\"#\".concat(tabId));\n      var $tabCountries = $tabContent.find('li');\n      var countries = extractCountriesInfo($tabCountries);\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n  }\n\n  function populateContinentSelect($continentSelect, tabs) {\n    tabs.each(function () {\n      var option = $('<option>').val(this.continent).text(this.continent);\n      $continentSelect.append(option);\n    });\n  }\n\n  function handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab) {\n    $continentSelect.on('change', function () {\n      var continent = $continentSelect.val();\n      var $countriesSelect = $currentCountriesTab.find('.select-country');\n      $countriesSelect.prop('disabled', false);\n      $countriesSelect.html('');\n      var tab = tabs.filter(function () {\n        return this.continent === continent;\n      })[0];\n      tab.countries.forEach(function (country) {\n        var option = $('<option>').val(country.href).text(\"\".concat(country.name, \" (\").concat(country.count, \")\"));\n        $countriesSelect.append(option);\n      });\n    });\n  }\n\n  function handleFormSubmit($currentCountriesTab) {\n    $currentCountriesTab.find('.countries-form').submit(function (e) {\n      e.preventDefault();\n      var selectedCountry = $currentCountriesTab.find('.select-country').val();\n      window.location.href = selectedCountry;\n    });\n  }\n\n  $countriesTabs.each(function () {\n    var $currentCountriesTab = $(this);\n    var tabs = extractTabsInfo($currentCountriesTab);\n    var $continentSelect = $currentCountriesTab.find('.select-continent');\n    populateContinentSelect($continentSelect, tabs);\n    handleContinentSelectChange($continentSelect, tabs, $currentCountriesTab);\n    handleFormSubmit($currentCountriesTab);\n  });\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-tabs.js?");

/***/ })

}]);