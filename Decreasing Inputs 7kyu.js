// This kata is all about adding numbers.

// You will create a function named add. It will return the sum of all the arguments. Sounds easy, doesn't it?

// Well Here's the Twist. The inputs will gradually decrease with their index as parameter to the function.


function add()
{
  
  return Array.from(arguments).length == 0 ? 0 : Math.round(Array.from(arguments).reduce((acc,x,i)=> acc+=(x/(i+1))))
}