// Given and integer array 'nums', find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// a subarray is a contiguous part of an array

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

function maxSubArray(nums) {
  let currMax = nums[0];
  let maxima = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i], currMax + nums[i]);
    maxima = Math.max(maxima, currMax);
  }
  return maxima;
}

module.exports = { maxSubArray };