/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfolc_styleguide"] = self["webpackChunkfolc_styleguide"] || []).push([["categories-tabs"],{

/***/ "./src/js/modules/categories-tabs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/categories-tabs.js ***!
  \*******************************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('.categories-tabs .nav-link').click(function () {\n    var className = $(this).attr('class').split(' ')[1]; // get the class that starts with \"nav-link--\"\n\n    $('#categories-tabs-content').removeClass(function (index, bgClassName) {\n      return (bgClassName.match(/(^|\\s)bg-\\S+/g) || []).join(' '); // remove any classes that start with \"bg-\"\n    });\n    $('#categories-tabs-content').addClass(\"bg-\".concat(className.split('--')[1])); // add the class \"bg-[className]\" to #categories-tabs-content\n  });\n  var select = $('#select-categories'); // Loop through the existing nav-item elements to create new option elements\n\n  $('.categories-tabs .nav-item').each(function () {\n    var navItem = $(this);\n    var option = $('<option>');\n    option.val(navItem.find('a').attr('href'));\n    option.text(navItem.find('a').text());\n    select.append(option);\n  }); // When the select element is clicked\n\n  select.on('change', function () {\n    var selectedTab = $(this).val();\n    var selectedContent = $(selectedTab).find('.categories-cols').html(); // const classToAdd = `bg-${selectedTab.substring(10)}`; // get the text after \"#category-\"\n    // $(this).removeClass(function (index, className) {\n    // \treturn (className.match(/\\bbg-\\S+/g) || []).join(' ');\n    // }).addClass(classToAdd).addClass('text-white');\n    // Append the relevant content from the .tab-pane .categories-cols element below the select element\n\n    $('#categories-select-content').html(selectedContent);\n    $('#categories-select-content a').addClass('with-prefix pb-1');\n  });\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/categories-tabs.js?");

/***/ })

}]);