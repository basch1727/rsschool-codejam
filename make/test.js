const assert = require('assert');

Object.freeze(assert);
Object.freeze(Object.prototype);
Object.freeze(Array.prototype);

const make = require('./src/make.js');