// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)



//answer
function isIsogram(str){
    let strObj ={}
    let result = true
    str.toLowerCase().split('').forEach((x,i)=>{
      if (x in strObj){
        result = false
      } else{
        strObj[x] = x
      }
    })
    return result
  }