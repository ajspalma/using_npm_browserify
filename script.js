// Load the full build. - Lodash
// var _ = require('lodash');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var without = require('lodash/without');

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// without 3 
console.log("Answer: ", without(array, 3));