// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

// EXAMPLE: 
// [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

// FUNCTION: 
function positiveSum(arr) {
  let positives = [];
    arr.forEach(
      function(element){
        if (element > 0){
          return positives.push(element);
        }
      })
    return positives.reduce((prev, curr) =>{
      return prev + curr;},0)
  }

// TEST ARRAYS:
test1 = [1,2,3,4,5]
test2 = [1,-2,3,4,5]
test3 = [-1,-2,-3,-4,-5]
test4 = [-1,2,3,4,-5]

// TESTING CONFIRMATION:
console.log(positiveSum(test1))
console.log(positiveSum(test2))
console.log(positiveSum(test3))
console.log(positiveSum(test4))