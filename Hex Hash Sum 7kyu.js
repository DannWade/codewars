
// Complete the function that accepts a valid string and returns an integer.

// Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).


//PREP
//P: string
//R: integer 
//E:"Hello, World!"  ==> 91
//P: convert string into an array
    //map each character to its ASCII code
    //return the sum of that array

    // answer

    function hexHash(code){
        let arr = code.split('')
        if(code == ''){
          return +0
        } else{
        return arr.map((x,i)=> x= x.charCodeAt(0).toString(16)).join('').match(/[0-9]/g).reduce((accum,x)=>accum+= +x,0)
      }
        }