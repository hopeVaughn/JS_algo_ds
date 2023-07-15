// given an unsorted array return a sorted array using bubble sort

// input: [5, 3, 4, 1, 2]

// output: [1, 2, 3, 4, 5]

// bubble sort works by comparing adjacent elements and swapping them if they are out of order
// it continues this process until the array is sorted

// bubble sort is an in-place sorting algorithm

// time complexity: O(n^2)

// space complexity: O(1)

// pseudocode:

// loop through the array
// loop through the array starting at the second element
// if the current element is smaller than the previous element
// swap the current element with the previous element
// return the array

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

