// Given an integers array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

//   Example 1:

// Input: nums = [1, 2, 3, 1]
// Output: true

// Example 2:

// Input: nums = [1, 2, 3, 4]
// Output: false

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
}

module.exports = { containsDuplicate };
