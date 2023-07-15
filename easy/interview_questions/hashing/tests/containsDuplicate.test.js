const { containsDuplicate } = require('../challenge/containsDuplicate');

console.log(containsDuplicate([1, 2, 3, 1])); // true

console.log(containsDuplicate([1, 2, 3, 4])); // false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1])); // true

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 2])); // true