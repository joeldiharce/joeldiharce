// DESCRIPTION:
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// EXAMPLE (Input -> Output):
// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// FUNCTION: 
var summation = function (num) {

  var total = 0;                            // The variable total is declared as 0 to accumulate sums.
  for (let i = 1; i <= num; i++) {          // "i" starts at 1, and i increments by 1 until i is equal to num
    total += i;                             // values of total and i are added together, and the resulting value is assigned to total.
  }
  return total;                             // after the loop ends, the accumulated value assigned to total is returned.
}

// TESTING CONFIRMATION:
summation(1);
summation(2);
summation(8);