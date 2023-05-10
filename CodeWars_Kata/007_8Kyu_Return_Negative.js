// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// EXAMPLES:
//  makeNegative(1);    returns -1
//  makeNegative(-5);   returns -5
//  makeNegative(0);    returns 0
//  makeNegative(0.12); returns -0.12

// NOTES:
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// FUNCTION:
function makeNegative(num) {
  return num<0 ? num : -num;
}

// TESTING CONFIRMATION:
console.log(makeNegative(42))
console.log(makeNegative(0))
console.log(makeNegative(-1))
console.log(makeNegative(-2))