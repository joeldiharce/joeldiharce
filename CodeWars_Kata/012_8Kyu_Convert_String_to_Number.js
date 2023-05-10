// DESCRIPTION:
// We need a function that can transform a string into a number. What ways of achieving this do you know?
// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// EXAMPLE:
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// FUNCTION:
const stringToNumber = function(str){
  return parseFloat(str);                 // Converts numerical strings to numbers.
}

// TESTING CONFIRMATION:
stringToNumber("1234");
stringToNumber("605");
stringToNumber("1405");
stringToNumber("-7");