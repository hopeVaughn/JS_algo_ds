// Given an array prices where prices[i] is the price of a given stock on the ith day. Maximum profit can be achieved by buying on one day and selling on another day. Return the maximum profit.

//   Example 1:

// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//   Example 2:

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

function buyAndSellStock(prices) {
  let curMin = prices[0];
  let curMax = 0;

  for (let i = 1; i < prices.length; i++) {
    curMin = Math.min(curMin, prices[i]);
    curMax = Math.max(curMax, prices[i] - curMin);
  }

  return curMax;
}

module.exports = { buyAndSellStock };
// Space and Time Complexity Analysis
// O(n) time | O(1) space - where n is the length of the input array
