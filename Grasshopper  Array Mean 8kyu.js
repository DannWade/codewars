// Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    return nums.reduce((acc,x)=>acc+=x)/(nums.length)
  }