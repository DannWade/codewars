// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

//PREP
//P:string
//R: boolean
//E:'abcde', 'cde'), true
//P: slice a copy of a string begining at the length of the argument, store in a variable
  //:add the argument to the variable and return it

  function solution(str, ending){
    let newer = str
    let newest = newer.slice(0,(str.length - ending.length))
    return (newest + ending) == str ? true :false
  }