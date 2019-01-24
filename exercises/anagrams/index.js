// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// MY SOLUTION
// function anagrams(stringA, stringB) {
//   // Step 1: create obj of exceptions 
//   let exceptions = {
//     ' ': true,
//     ',': true,
//     '!': true,
//     '.': true
//   }
//   // Step 2: loop through each str, create obj
//   let objA = createObj(stringA, exceptions)
//   let objB = createObj(stringB, exceptions)

//   // loop through one obj, if its key does not exist in the other obj => false 
//   for (let key in objA) {
//     if (Object.keys(objB).length !== Object.keys(objA).length) return false
//     if (objA[key] !== objB[key]) return false
//   }
//   return true
// }

// function createObj(str, exceptions) {
//   let obj = {}
//   for (let char of str) {
//     if (!exceptions[char]) {
//       if (obj[char]) obj[char]++
//       else obj[char] = 1
//     }
//   }
//   return obj
// }

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;
