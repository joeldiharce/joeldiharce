// DESCRIPTION:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// FUNCTION:
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';   // Tertiary returning 'Yes' if true, and 'No' if false.
}

// TESTING CONFIRMATION:
console.log(boolToWord(true))
console.log(boolToWord(false))