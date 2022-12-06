// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//answer

function getSum( a,b )
{
  let sum = 0
   let ordered = [a,b].sort((j,k)=>j-k)
   for (let i = ordered[0]; i<=ordered[1];i++){
     sum+=i
   }
     return sum
}

