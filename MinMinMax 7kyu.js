// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.

// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.

// You solution should return an array [smallest, minimumAbsent, largest]

// The smallest integer should be the integer from the array with the lowest value.

// The largest integer should be the integer from the array with the highest value.

// The minimumAbsent is the smallest number between the largest and the smallest number that is not in the array.

//PREP
//P:array of integers
//R: three integer array 
//E:[-1, 4, 5, -23, 24]), [-23, -22, 24]
//P: define emtpy array to store final array
  //  sort the array from smallest to largest
  // store the first and last integers from the sorter array into the new array
  // initiate loop that begins from smallest integer and increments, checking if in existing array
  // if not in existing array, add to the new array

  function minMinMax(array) {
    let finArray = []
    finArray[0] = array.sort((a,b)=> a-b)[0]
    finArray[2] = array.sort((a,b)=> a-b)[array.length-1]
    for(let i = finArray[0];i<finArray[2];i++){
      if(!array.includes(i)){
        finArray[1]=i
        break
      }
    }
    return finArray
}