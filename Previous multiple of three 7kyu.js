// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.


//PREP
//P: a positiive integer
//R: the integer within the integer given that is a multiple of 3 or null if no such integer exists
//E: 92, returns 9
//P: run a loop that checks if the integer is divisible by three
    //if the integer is not divisible by 3, then pop the last digit
    //if it is divisible by three, return the integer
    //if the loop completes, then that means none of the integers are divisible by 3 and return -1

    //answer

    const prevMultOfThree = n => {
        let array = String(n).split('')
        for (let i=0;i<array.length;i++){
          if(+array.slice(0,array.length-i).join('') % 3 ==0){
            return +array.slice(0,array.length-i).join('')
          }
        }
        return null
      }