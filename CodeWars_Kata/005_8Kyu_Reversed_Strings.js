// DIRECTIONS: Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// SUBMITTED ANSWER:
// function solution(str){
//     return str.split('').reverse().join('')
// }

// TEST:
// console.log(solution('world'))
// console.log(solution('hello'))
// console.log(solution(''))
// console.log(solution('h'))

//PLAYING WITH THE SPLIT METHOD:

function withQuotesSplit(str){
    console.log("Split only, with quotes:")
    return str.split('');
}

function withQuotesSplitReverse(str){
    console.log("Split and Reverse, with quotes:")
    return str.split('').reverse();

}

function withQuotesSplitReverseJoin(str){
    console.log("Split, Reverse, and Join, with quotes:")
    return str.split('').reverse().join('');

}

function withOutQuotesSplit(str){
    console.log("Split, without quotes:")
    return str.split();

}

function withOutQuotesSplitReverse(str){
    console.log("Split, Reverse, without quotes:")
    return str.split().reverse();

}

function withOutQuotesSplitReverseJoin(str){
    console.log("Split, Reverse, and Join, without quotes:")
    return str.split().reverse().join();

}

function splitQuotedReverseJoinUnquoted(str){
    console.log("Split with quotes, Reverse, and Join without quotes:")
    return str.split('').reverse().join();

}

function splitUnquotedReverseJoinQuoted(str){
    console.log("Split with quotes, Reverse, and Join without quotes:")
    return str.split().reverse().join('');

}

// WHAT I LEARNED: 
console.log(withQuotesSplit('hello'))                   // [ 'h', 'e', 'l', 'l', 'o' ]  
console.log(withQuotesSplitReverse('hello'))            // [ 'o', 'l', 'l', 'e', 'h' ]
console.log(withQuotesSplitReverseJoin('hello'))        // olleh
console.log(withOutQuotesSplit('hello'))                // [ 'hello' ]                  The Split method requires a separator argument, so if one is not provided, it defaults to undefined, and puts the whole string into the first element of the array.
console.log(withOutQuotesSplitReverse('hello'))         // [ 'hello' ]                  The chained Reverse method will reverse the order of an array, so if the array is one element, due to not using the quotations as a separator argument, the Reverse method will reverse the order of one element, effectively leaving it the same.
console.log(withOutQuotesSplitReverseJoin('hello'));    // hello
console.log(splitQuotedReverseJoinUnquoted('hello'))    // o,l,l,e,h
console.log(splitUnquotedReverseJoinQuoted('hello'));   // hello


