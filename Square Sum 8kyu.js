// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
// //  =9.

//answer

function squareSum(numbers){
    let numArr = Array.prototype.slice.call(...arguments)
    return numArr.reduce((acc,x)=> acc += Math.pow(x,2),0)
   }