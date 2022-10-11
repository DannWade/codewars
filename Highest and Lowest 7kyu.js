// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//answer

function highAndLow(numbers){
    let numsArray = numbers.split(' ').sort((a,b)=>+b>+a?1:-1)
    numsArray.splice(1, numsArray.length-2)
   return numsArray.join(' ')
   }