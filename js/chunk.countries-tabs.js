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

eval("$(document).ready(function () {\n  var $countriesTabs = $('.countries-tabs');\n\n  if ($countriesTabs.length > 0) {\n    var $nav = $countriesTabs.find('.nav-pills');\n    var $tabElements = $nav.find('li');\n    var tabs = $tabElements.map(function () {\n      var $a = $(this).find('a');\n      var continent = $a.text();\n      var tabId = $a.attr('href').substring(1);\n      var countries = [];\n      var $tabContent = $(\"#\".concat(tabId));\n      var $tabCountries = $tabContent.find('li');\n      $tabCountries.each(function () {\n        var $link = $(this).find('a');\n        var href = $link.attr('href');\n        var name = $link.text().split('(')[0].trim();\n        var count = parseInt($link.text().split('(')[1].split(')')[0], 10);\n        countries.push({\n          name: name,\n          count: count,\n          href: href\n        });\n      });\n      return {\n        continent: continent,\n        countries: countries\n      };\n    });\n    var $continentSelect = $('#select-continent');\n    tabs.each(function () {\n      var option = $('<option>').val(this.continent).text(this.continent);\n      $continentSelect.append(option);\n    });\n    $continentSelect.on('change', function () {\n      var continent = $continentSelect.val();\n      var $countriesSelect = $('#select-country');\n      $countriesSelect.prop('disabled', false);\n      $countriesSelect.html('');\n      var tab2 = tabs.filter(function () {\n        return this.continent === continent;\n      });\n      tab2[0].countries.forEach(function (country) {\n        var option = $('<option>').val(country.href).text(\"\".concat(country.name, \" (\").concat(country.count, \")\"));\n        $countriesSelect.append(option);\n      });\n    });\n    $('.countries-form').submit(function (e) {\n      e.preventDefault();\n      var selectedCountry = $('#select-country').val();\n      window.location.href = selectedCountry;\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/countries-tabs.js?");

/***/ })

}]);