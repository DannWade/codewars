// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

//Answer

function inAscOrder(arr) {
    let count = 1
     arr.forEach((x,j)=> x>arr[j-1]?count+=1:count+=0)
      if(count === arr.length){
      return true
    }else{
      return false
    }
  }