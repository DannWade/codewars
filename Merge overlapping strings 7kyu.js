

// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

//answer




function mergeStrings(first, second){
    let fArr = first.split('')
    let sArr = second.split('')
    for (let i=0 ; i<sArr.length ; i++){
      if(fArr.slice(-i).join('') == sArr.slice(0,i).join('')){
        let newArr = fArr.concat(sArr.slice(i)).join('')
        return newArr
      }
    } 
    if (first === second){
      return first
    }else{
      return fArr.concat(sArr).join('')
    }
  }