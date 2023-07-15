const { selectionSort } = require('../challenge/selectionSort');

// Test case 1
console.log(selectionSort([5, 3, 4, 1, 2])); // [1, 2, 3, 4, 5]

// Test case 2
console.log(selectionSort([5, 3, 4, 1, 2, 6])); // [1, 2, 3, 4, 5, 6]

// Test case 3
console.log(selectionSort([5, 3, 4, 1, 2, 6, 7])); // [1, 2, 3, 4, 5, 6, 7]

// Test case 4
console.log(selectionSort([5, 3, 4, 1, 2, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]

// Test case 5
console.log(selectionSort([5, 3, 4, 1, 2, 6, 7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Test case 6
console.log(selectionSort([5, 3, 4, 1, 2, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]