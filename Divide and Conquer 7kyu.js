// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.


function divCon(x){
    let strings =  x.filter((x)=> typeof x == 'string').reduce((acc,x) => acc += +x,0)
    return x.filter(x=> typeof x =='number').reduce((acc,x)=> acc += x,0) - strings
  
  }