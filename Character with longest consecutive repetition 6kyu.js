// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

//answer

function longestRepetition(s) {
    let arr = ['',0]
    let longestConsec = 0
    let stringArr = s.split('')
    let consec = 1
    stringArr.forEach((x,i)=>{
      if(x !== stringArr[i+1]){
        if(consec>longestConsec){
          longestConsec = consec
          arr[0]=x
          arr[1]=longestConsec
        }
        consec = 1
      } else {
        consec +=1
      }
    })
    return arr
   }

