
// import * as rootcave from './011';

// const stringArray = ['I like', 'I study from', 'This is'];

// const result = rootcave.rootCave(...stringArray);

// document.getElementById('result').innerHTML = result.join('<br/>');

import {rootCave as rc, webSchool} from './011';

const stringArray = ['I like', 'I study from', 'This is'];

const result = rc(...stringArray);

document.getElementById('result').innerHTML = result.join('<br/>');


/**
 * we need to use webpack for moduling
 * 1- npm install -g webpack
 * 2- webpack ./012.js 012-bundle.js
 * 3- <script src="012-bundle.js" charset="utf-8"></scrip>
 */