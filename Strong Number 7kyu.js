// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// answer

function strong(n) {
    let splitNum = n.toString().split('')
    let total = 0
    splitNum.forEach(x =>{
       let factorial = 1
       for (let i=1;i<=x;i++){
         factorial *= i  
       }
      total += factorial
     })
     
     return total === n ? "STRONG!!!!": "Not Strong !!"
   }