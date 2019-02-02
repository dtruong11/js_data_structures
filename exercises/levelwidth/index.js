// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // Step 1: create queue, with root, 'end'
  const q = [root, 'end']
  const result = [0]

  // Step 2: q.length > 1 
  // avoid infinite loop; 'end' is the only thing in the queue, break
  while (q.length > 1) {
    let node = q.shift()
    // Step 3: if popped end, finished a level. Push end back to the end of queue
    if (node === 'end') {
      result.push(0)
      q.push('end')
    } else {
    // Step 4: push children into the queue && update counter (last el) in result at the same time
      q.push(...node.chidlren)
      result[result.length - 1]++
    }
  }
  return result 
}

module.exports = levelWidth;
