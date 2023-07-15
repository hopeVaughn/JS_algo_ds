// Insertion Sort

// Insertion sort is a basic sorting algorithm.

// Insertion sort iterates over an array, growing a sorted array behind the current location. It takes each element from the input and finds the spot, up to the current point, where that element belongs. It does this until it gets to the end of the array.

// Insertion sort should be implemented as a stable sort. This means that equal elements
// should retain their relative order. Numbers, as primitives, give us no way to check this
// directly. We can solve this by adding an index as the second element of every item
// in the input. So a sorting call on [1, 5, 1, 2] would actually receive
// [[1, 0], [5, 1], [1, 2], [2, 3]] as its input. The index, of course, will be
// i (the second argument of the callback).

// Notice that these are arrays, not tuples. The added zeroth element is so that the
// default comparison operators will work as expected. With this, insertion sort can
// proceed normally, but at the end, we will need to strip out those zeroth elements
// before returning the array of tuples.

function insertionSort(nums) {
  // do something
}

module.exports = { insertionSort };