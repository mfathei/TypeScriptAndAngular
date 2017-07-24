"use strict";
// import * as rootcave from './011';
Object.defineProperty(exports, "__esModule", { value: true });
// const stringArray = ['I like', 'I study from', 'This is'];
// const result = rootcave.rootCave(...stringArray);
// document.getElementById('result').innerHTML = result.join('<br/>');
var _011_1 = require("./011");
var stringArray = ['I like', 'I study from', 'This is'];
var result = _011_1.rootCave.apply(void 0, stringArray);
document.getElementById('result').innerHTML = result.join('<br/>');
/**
 * we need to use webpack for moduling
 * 1- npm install -g webpack
 * 2- webpack ./012.js 012-bundle.js
 * 3- <script src="012-bundle.js" charset="utf-8"></scrip>
 */ 
//# sourceMappingURL=012.js.map