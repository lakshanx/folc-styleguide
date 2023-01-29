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

eval("$(document).ready(function () {\n  var $categoriesTabs = $('.categories-tabs');\n\n  if ($categoriesTabs.length) {\n    var $categoriesTabContent = $categoriesTabs.find('.categories-tabs-content');\n    var $select = $categoriesTabs.find('.select-categories');\n    var $categoriesSelectContent = $categoriesTabs.find('.categories-select-content');\n    $('.categories-tabs .nav-link').click(function () {\n      var className = $(this).attr('class').split(' ')[1];\n      $categoriesTabContent.removeClass(function (index, bgClassName) {\n        return (bgClassName.match(/(^|\\s)bg-\\S+/g) || []).join(' ');\n      });\n      $categoriesTabContent.addClass(\"bg-\".concat(className.split('--')[1]));\n    });\n    $('.categories-tabs .nav-item').each(function () {\n      var $navItem = $(this);\n      var $option = $('<option>');\n      $option.val($navItem.find('a').attr('href'));\n      $option.text($navItem.find('a').text());\n      $select.append($option);\n    });\n    $select.on('change', function () {\n      var selectedTab = $(this).val();\n      var selectedContent = $(selectedTab).find('.categories-cols').html();\n      $categoriesSelectContent.html(selectedContent);\n      $categoriesSelectContent.find('a').addClass('with-prefix pb-1');\n    });\n  }\n});\n\n//# sourceURL=webpack://folc-styleguide/./src/js/modules/categories-tabs.js?");

/***/ })

}]);