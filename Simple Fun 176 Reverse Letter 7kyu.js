// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//PREP
//P:string container alpha and non-alpha characters
//R: string that is reversed the given string and reversed
//E:"krishan"),"nahsirk"
//P: store all alpha characters as a string in a variable
  // declare variable with empty array
  // split the argument into an array and iterate through array
  // if each item is included in alpha string, push it to empty string
  // after iterating, return the reverse of the array product

  function reverseLetter(str) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let arr = []
    str.split('').forEach((x,i)=>{
      if (alpha.includes(x)){
        arr.push(x)
      }
    })
    return arr.reverse().join('')
  }