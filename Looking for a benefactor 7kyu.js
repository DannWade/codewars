// Task
// The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.

// Should the last donation be a non positive number (<= 0) John wants us:

// to return:

// Nothing in Haskell, Elm
// None in F#, Ocaml, Rust, Scala
// -1 in C, D, Fortran, Nim, PowerShell, Go, Pascal, Prolog, Lua, Perl, Erlang
// or to throw an error (some examples for such a case):

// IllegalArgumentException() in Clojure, Java
// ArgumentException() in C#
// echo ERROR in Shell
// argument-error in Racket
// std::invalid_argument in C++
// ValueError in Python
// So, he will clearly see that his expectations are not great enough. In "Sample Tests" you can see what to return.

// Notes:
// all donations and navg are numbers (integers or floats), arr can be empty.
// See examples below and "Sample Tests" to see which return is to be done.


//PREP
//P: an array of integers of both non-negative and negative numbers, and a target average
//R: return the an integer for the next integer of the array to obtain the desired average
//E: [14, 30, 5, 7, 9, 11, 15], 30 desired average
//P: if statment to determine if the last index integer is a negative number
    // if so, return -1
    // store the next integer to obtain desired average in a variable
    //return next integer as the else statment 

    function newAvg(arr, newavg) {
        let last =  Math.ceil(newavg*(arr.length + 1) - arr.reduce((acc,x) => acc+=x,0))
       if (last <= 0){
           throw "Expected New Average is too low"
         } else { 
         return last
         }
     }