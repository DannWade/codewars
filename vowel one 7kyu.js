// vowelOne
// Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

// All non-vowels including non alpha characters (spaces,commas etc.) should be included.

//answer

function vowelOne(s){
    let vowels = {'a':0,'e':0,'i':0,'o':0,'u':0}
    return s.toLowerCase().split('').map((x,i)=>x in vowels ? x=1 : x=0).join('')
  }