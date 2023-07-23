const { maxSubArray } = require('../solutions/maxSubArray.js');

// Test 1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // expected output: 6

// Test 2
console.log(maxSubArray([1, 2, 3, 4, 5])); // expected output: 15

// Test 3
console.log(maxSubArray([-1, -2, -3, -4, -5])); // expected output: -1

// Test 4
console.log(maxSubArray([1])); // expected output: 1

// Test 5
console.log(maxSubArray([-1])); // expected output: -1

// Test 6
console.log(maxSubArray([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // expected output: 0