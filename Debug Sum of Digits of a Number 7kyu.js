// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

//answer

function getSumOfDigits(integer) {
    var sum = null;
    var digits =  Math.floor(integer).toString().split('');
    for(var ix = 0; ix < digits.length; ix++) {
      sum +=  +digits[ix];
    }
    return sum;
  }