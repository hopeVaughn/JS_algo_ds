const { insertionSort } = require('../challenge/insertionSort');

// Test 1
console.log(insertionSort([1, 5, 1, 2])); // should return [1, 1, 2, 5]

// Test 2
console.log(insertionSort([1, 5, 1, 2, 0, 0])); // should return [0, 0, 1, 1, 2, 5]

// Test 3
console.log(insertionSort([1, 5, 1, 2, 0, 0, -1, -5])); // should return [-5, -1, 0, 0, 1, 1, 2, 5]

// Test 4
console.log(insertionSort([1, 5, 1, 2, 0, 0, -1, -5, 5])); // should return [-5, -1, 0, 0, 1, 1, 2, 5, 5]

// Test 5
console.log(insertionSort([1, 5, 1, 2, 0, 0, -1, -5, 5, 0])); // should return [-5, -1, 0, 0, 0, 1, 1, 2, 5, 5]

// Test 6
console.log(insertionSort([1, 5, 1, 2, 0, 0, -1, -5, 5, 0, 1])); // should return [-5, -1, 0, 0, 0, 1, 1, 1, 2, 5, 5]
