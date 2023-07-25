const maxDepthRecursive = require('../solution/maxDepthRecursive');
const { buildTree } = require('./helpers/buildTree');


// Test 1
let root = buildTree([3, 9, 20, null, null, 15, 7]);
let depth = maxDepthRecursive(root);
console.log(`Expected: 3, Output: ${depth}`); // Expected: 3

// Test 2
root = buildTree([1, null, 2]);
depth = maxDepthRecursive(root);
console.log(`Expected: 2, Output: ${depth}`); // Expected: 2

// Test 3
root = buildTree([]);
depth = maxDepthRecursive(root);
console.log(`Expected: 0, Output: ${depth}`); // Expected: 0

// Test 4
root = buildTree([0, 2, 4, 1, null, 3, -1, 5, 1, null, 6, null, 8]);
depth = maxDepthRecursive(root);
console.log(`Expected: 4, Output: ${depth}`); // Expected: 4

// Test 5
root = buildTree([1, 2, 3, 4, 5, null, 6, 7, null, null, null, null, 8]);
depth = maxDepthRecursive(root);
console.log(`Expected: 4, Output: ${depth}`); // Expected: 5

// Test 6
root = buildTree([1]);
depth = maxDepthRecursive(root);
console.log(`Expected: 1, Output: ${depth}`); // Expected: 1