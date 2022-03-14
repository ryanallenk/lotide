const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); // => this should also PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS