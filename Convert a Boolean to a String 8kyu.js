// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//PREP
//P: boolean value
//R: string 
//E: (booleanToString(true), "true")
//P: use ternary operators to return either 'true' or 'false'
  //depending if the parameter is true or false

  function booleanToString(b){
    return b === true ? 'true' : 'false'
  }