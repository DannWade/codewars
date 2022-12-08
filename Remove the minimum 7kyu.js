// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// // Don't change the order of the elements that are left.

//PREP
//P: array of integers
//R: array with lowest value omitted or empty array if empty
//E: [4,5,6,3] (array without 2 that was previously included)
//P: function eliminateMin (array){
// set conditional that checks if the array is empty or not
//     define variable with a value of the minumum value of the Array 
//     define variable bound to value equal to the index of the minimum value within the Array
//     return a new array bound to a value equal to the array with minum value spliced out 
// }

// answer

function removeSmallest(numbers) {
    if(numbers.length == 0){
      return []
    }else{
      let newNumbers = numbers.slice()
      let min = numbers.slice().sort((a,b)=>a-b)[0]
      let index = numbers.indexOf(min)
      let removed =  newNumbers.splice(index,1)
      return newNumbers
  
    }
  }
  removeSmallest([1,2,3,4,5])
