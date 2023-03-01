// In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

// The result should be a string of numbers, separated by comma and space.

//PREP
//P: three integers representing the starting value, difference value, and interations of the progression
//R: string of the arithmetic progression
//E: (1, 2, 5), "1, 3, 5, 7, 9"
//P: define an empty array, place the starting value in a variable
    // initiate a for loop that iterates as many times as the argument provides
    // with each iteration, add the variable with the starting value to the array, and add the difference argument to the variable
    //return the array as a string

    function arithmeticSequenceElements(a, d, n) {
        let arr = []
        let num = a
          for (let i=0; i<n; i++){
          arr.push(num)
          num += d
        }
        return arr.join(', ')
      }