// DESCRIPTION: Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// FUNCTION:
function evenOrOdd(number) {
return (number % 2 == 0) ? "Even" : "Odd"
}

// TESTING CONFIRMATION:
console.log(evenOrOdd(2))
console.log(evenOrOdd(7))
console.log(evenOrOdd(-42))
console.log(evenOrOdd(-7))
console.log(evenOrOdd(0))