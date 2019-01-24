// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1: For loop 
// const reverse = (str) => {
//   let result = ''
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i]
//   }
//   return result
// }

// Solution 2: Array.reverse()
// const reverse = (str) => {
//   const arr = str.split('')
//   arr.reverse()
//   return arr.join('')
// }

// Solution 3: for of 
// const reverse = (str) => {
//   let reversed = ''
//   for (let character of str) {
//     reversed = character + reversed
//   }
//   return reversed
// }

// Solution 4: reduce 
const reverse = (str) => {
  return str.split('').reduce((acc, cur) => {
    return cur + acc
  }, '')
}


module.exports = reverse;
