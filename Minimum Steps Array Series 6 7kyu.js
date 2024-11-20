// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minimumSteps(numbers, value){
    //parameters: number, number
    //return:number
    //example: {1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
    //pseudo: sort the list from smallest to largest.Define a total variable. start a for loop that uses the interator value i to tracks the number of operations performed. Add each number at index i of the array to the total. Check if total is equal to or greater than value. if so, return i. If not, for loop continues.
    let tot = 0
    let sorNum = numbers.sort((a,b)=>a-b)
    for (let i=0; i<numbers.length;i++){
      tot += sorNum[i]
      if (tot >= value){return i}
    }
  }