// The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

// Note: This min function need not handle more than two arguments.


//PREP
//P:any data type
//R: minimum between two numbers, null if 0 or NAN for any datatype that is not an integer
//E: (1,2)?1
//P: arrow function that returns null for 0, NAN for any datatype not a number, and minimum for two integer
    //  use sort method to locate first index integer, which is the smallest

    //answer
    function min(a, b){
        return (isNaN(a) || isNaN(b)) ? NaN : ((a < b) ? +a : +b);
      }