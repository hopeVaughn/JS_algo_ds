// Pascals triangle
// Provided an integer(numRows), generate an array of arrays of Pascal's triangle.9
// 
// Example:
//
// Input: 5
// Output: [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]

// Space and Time Complexity Analysis
// O(n^2) time | O(n^2) space - where n is the number of rows

// Solution 1

function pascalsTriangle(numRows) {
  let res = [];
  if (numRows >= 1) res.push([1]);
  if (numRows >= 2) res.push([1, 1]);

  for (let i = 2; i < numRows; i++) {
    let first = 1;
    let last = 1;

    let prevArray = res[i - 1];

    if (prevArray.length === 2) {
      res.push([first, first + last, last]);
    } else {
      let left = 0;
      let right = 1;
      let add = [];

      while (right < prevArray.length) {

        add.push(prevArray[left] + prevArray[right]);
        left++;
        right++;
      }
      res.push([first, ...add, last]);
    }
  }

  console.log(res);
}
