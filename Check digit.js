// In this Kata, you will be given a number, two indexes (index1 and index2) and a digit to look for. Your task will be to check if the digit exists in the number, within the indexes given.

// Be careful, the index2 is not necessarily more than the index1.

//answer

function checkDigit(number, index1, index2, digit) {
    console.log(String(number).split('').slice(Math.min(index1,index2), Math.max(index1,index2) +1))
    return  String(number).split('').slice(Math.min(index1,index2), Math.max(index1,index2) +1).includes(String(digit)) ? true : false
    
  };