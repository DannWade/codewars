
// You are given an input (n) which represents the amount of lines you are given.
// Your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.



//PREP
//P: integer non-negative
//R: maximum number of perpedicular bisectors as an integer
//E: n=3, return 2
//P: function bisectors(n){
    // if n is even, return the formula for max bisectors for even numbers
    //if n is odd, return formula for max bisectors for odd numbers
// }

//answer

let  maxBisectors = (n) => n==1 ?0 : n%2==0 ? Math.pow(n/2,2) : (Math.pow((n-1)/2,2)+((n-1)/2)) 


