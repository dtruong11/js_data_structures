// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	// swap two items next to each other
	let isSorted = false
	while (!isSorted) {
		isSorted = true
		for (let i = 0; i < arr.length; i++) {
			if (arr[i + 1] < arr[i]) {
				isSorted = false
				// swap two items
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
			}
		}
	}
	return arr
}

function selectionSort(arr) {
	// play card, swap first with the first min, second with second min 

	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j
			}
		}

		// swap
		let temp = arr[min]
		arr[min] = arr[i]
		arr[i] = temp
	}
	return arr
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort };
