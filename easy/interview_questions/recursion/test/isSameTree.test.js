const { isSameTree } = require('../solution/isSameTree');
const { buildTree } = require('./helpers/buildTree');

console.log(isSameTree(buildTree([1, 2, 3]), buildTree([1, 2, 3]))); // true
console.log(isSameTree(buildTree([1, 2]), buildTree([1, null, 2]))); // false
console.log(isSameTree(buildTree([1, 2, 1]), buildTree([1, 1, 2]))); // false
console.log(isSameTree(buildTree([1, 2, 3, 4]), buildTree([1, 2, 3, 5]))); // false
console.log(isSameTree(buildTree([1, 2, 3, 4, 5]), buildTree([1, 2, 3, 4, 5]))); // true
console.log(isSameTree(buildTree([1, 2, 3, null, 5]), buildTree([1, 2, 3, null, 5]))); // true