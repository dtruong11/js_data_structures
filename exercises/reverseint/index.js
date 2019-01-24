// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// Solution 1: My solution 
// const reverseInt = (n) => {
//   let str = n.toString()
//   let rev = str.split('').reverse().join('')
//   if (rev[0] === '0') {
//     rev.slice(1)
//   }
//   if (n < 0) {
//     let result = parseInt(rev)
//     return -result
//   }
//   return parseInt(rev)
// }

// Solution 2: Math.sign()
const reverseInt = (n) => {
  const res = n.toString().split('').reverse().join('')
  return parseInt(res) * Math.sign(n)
}

module.exports = reverseInt;
