// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

//  [true,  true,  true,  false,
//    true,  true,  true,  true ,
//    true,  false, true,  false,
//    true,  false, false, true ,
//    true,  true,  true,  true ,
//    false, false, true,  true]
//  The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// Function: 
const sheepTest = [                         // Declare test array.
  true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true
]

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(
    chkSheep => chkSheep === true         // Retun filtered array element value is true.
    ).length;                             // Count length of filtered array.
}

console.log(countSheeps(sheepTest));