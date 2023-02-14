// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.


//PREP
//P: non-zero integers
//R: boolean 
//E:6 = 3,2
//P: ternary expression that returns true if n modulos x is 0
  // and if n modulos y is 0
  function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0 ? true : false
  }