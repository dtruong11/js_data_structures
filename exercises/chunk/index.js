// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// RECURSION 
// function chunk(array, size, result = []) {
//   result.push(array.slice(0, size))
//   let rest = array.slice(size)
//   if (rest.length > 0) chunk(rest, size, result)
//   return result
// }

// ITERATION
function chunk(array, size, result = []) {
  while (array.length > 0) {
     
  }

}

module.exports = chunk;
