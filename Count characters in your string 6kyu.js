// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count(string) {
    let obj = {}
    let unique = Array.from(new Set(string.split('')))
    unique.forEach((x)=> obj[x]= string.split('').filter((j)=>j==x).length)
    return obj
  }