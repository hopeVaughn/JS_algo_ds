const { pascalsTriangle } = require('../challenge/pascals_triangle');
// Test case 1
console.log(pascalsTriangle(0)); // []

// Test case 2
console.log(pascalsTriangle(1)); // [[1]]

// Test case 3
console.log(pascalsTriangle(2)); // [[1], [1, 1]]

// Test case 4
console.log(pascalsTriangle(3)); // [[1], [1, 1], [1, 2, 1]]

// Test case 5
console.log(pascalsTriangle(4)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]

// Test case 6
console.log(pascalsTriangle(5)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]