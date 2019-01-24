// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// My solution 
// const palindrome = (str) => {
//   if (str.length % 2 === 0) {
//     let part1 = str.slice(0, str.length / 2)
//     let part2 = str.slice(str.length / 2)
//     let revp2 = part2.split('').reverse().join('')
//     if (revp2 === part1) return true
//     else return false
//   } else {
//     let p1 = str.slice(0, (str.length - 1) / 2)
//     let p2 = str.slice((str.length - 1) / 2 + 1)
//     let revp2 = p2.split('').reverse().join('')
//     if (p1 === revp2) return true
//     else return false
//   }
// }

// Solution 1: Array.reverse()
// const palindrome = (str) => {
//   // reverse the string: should be the same 
//   const reversed = str.split('').reverse().join('')
//   return str === reversed
// }

// Solution 2: Array.every()
const palindrome = (str) => {
  let arr = str.split('')
  return arr.every((char, idx) => {
    return char === str[str.length - 1 - idx]
  })
}

module.exports = palindrome;
