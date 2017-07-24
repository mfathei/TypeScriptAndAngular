/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import * as rootcave from './011';
Object.defineProperty(exports, "__esModule", { value: true });
// const stringArray = ['I like', 'I study from', 'This is'];
// const result = rootcave.rootCave(...stringArray);
// document.getElementById('result').innerHTML = result.join('<br/>');
var _011_1 = __webpack_require__(1);
var stringArray = ['I like', 'I study from', 'This is'];
var result = _011_1.rootCave.apply(void 0, stringArray);
document.getElementById('result').innerHTML = result.join('<br/>');
//# sourceMappingURL=012.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the same data but with ROOT CAVE!!!! at the end
 */
function rootCave() {
    var stringArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        stringArray[_i] = arguments[_i];
    }
    stringArray.forEach(function (item, index) {
        stringArray[index] = item + " ROOT CAVE!!!!";
    });
    return stringArray;
}
exports.rootCave = rootCave;
/**
 * Returns the same data but with ROOT CAVE!!!! at the end
 */
function webSchool() {
    var stringArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        stringArray[_i] = arguments[_i];
    }
    stringArray.forEach(function (item, index) {
        stringArray[index] = item + " ROOT CAVE!!!!";
    });
    return stringArray;
}
exports.webSchool = webSchool;
//# sourceMappingURL=011.js.map

/***/ })
/******/ ]);