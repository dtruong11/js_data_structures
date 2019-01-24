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

// Solution 1 - Recursion - REST 
function chunk1 (array, size, result = []) {
  let sub = array.slice(0, size)
  result.push(sub)
  let rest = array.slice(size)
  if (rest.length > 0) {
    // avoid empty array 
    return chunk1 (rest, size, result)
  }
  return result
}

// ITERATION
// Solution 2 - retrieve last element of result array
const chunk2 = (array, size) => {
  let result = []
  for (let el of array) {
    let last = result[result.length - 1]
    if (!last || last.length === size) { // either full or not there
      result.push([el])
    } else {
      last.push(el)
    }
  }
  return result 
}

// Solution 3 - iteration, use rest 
const chunk = (array, size) => {
  let result = []
  let idx = 0
  while (idx < array.length) {
    result.push(array.slice(idx, idx + size))
    idx += size
  } 
  return result 
}


module.exports = chunk;
