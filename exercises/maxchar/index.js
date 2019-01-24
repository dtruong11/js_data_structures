// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Solution 2: Second try 
const maxChar = (str) => {
  let max = 0
  let res = ''
  let obj = {}
  for (let char of str) {
    if (char !== ' '){
      obj[char] = obj[char] + 1 || 1 
    }
  }
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key]
      res = key 
    } 
  }
  return res 
}



// Solutin 1: My solution
// const maxChar = (str) => {
//   let obj = {}
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char] = 1 + obj[char]
//     } else {
//       obj[char] = 1
//     }
//   }

//   let arrVals = Object.values(obj)
//   let maxVal = Math.max(...arrVals)
//   console.log(maxVal)
//   for (let key in obj) {
//     if (obj[key] === maxVal) return key
//   }
// }


// Solution 2: 
// const maxChar = (str) => {
//   let charMap = {}
//   let max = 0;
//   let maxCharacter = '';
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char]
//       maxCharacter = char
//     }
//   }
//   return maxCharacter
// }

module.exports = maxChar;
