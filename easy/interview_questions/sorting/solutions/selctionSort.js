// given an unsorted array return a sorted array using selection sort

// input: [5, 3, 4, 1, 2]

// output: [1, 2, 3, 4, 5]

// selection sort works by finding the smallest element in the array and swapping it with the first element
// then it finds the second smallest element and swaps it with the second element
// it continues this process until the array is sorted

// selection sort is an in-place sorting algorithm

// time complexity: O(n^2)

// space complexity: O(1)

// pseudocode:

// loop through the array
// set the current index to the smallest index
// loop through the array starting at the current index
// if the current element is smaller than the element at the smallest index
// set the smallest index to the current index
// swap the element at the current index with the element at the smallest index
// return the array

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
