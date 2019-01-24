// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push([])
  }

  let counter = 1
  let top_row = 0
  let bottom_row = n - 1
  let start_col = 0
  let end_col = n - 1

  while (top_row <= bottom_row && start_col <= end_col) {
    // Top Row 
    for (let i = start_col; i <= end_col; i++) {
      arr[top_row][i] = counter++
    }
    top_row++

    // End Column 
    for (let i = top_row; i <= bottom_row; i++) {
      arr[i][end_col] = counter++ 
    }
    end_col--

    // Bottom Row 
    for (let i = end_col; i >= start_col; i--) {
      arr[bottom_row][i] = counter++ 
    }
    bottom_row--

    // Start Column 
    for (let i = bottom_row; i >= top_row; i--) {
      arr[i][start_col] = counter++ 
    }
    start_col++ 
  }

  return arr 
}



module.exports = matrix;
    // // loop through rows
    // for (let i = 0; i < arr.length; i++) {
    //   if (start_col === end_col) {
    //     top_row++
    //     arr[i][arr[i].length - 1] = counter++
    //   } else {
    //     for (let j = 0; j < arr.length; j++) {
    //       arr[i][j] = counter++
    //       start_col++
    //     }
    //   }
    // }
  /* 
    create empty array of arrays

    loop through arr 

    at each el, counter ++ , change top_row, bottom_row, start_col, end_col values 

    as long as start_col < end_col && start_row < end_row
  */
