// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There are preloaded dictionary you can use, named NATO
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace


//PREP
//P: string
//R: string
//E:If, you can read?India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?
//P: turn string into lowercase
  //split the string into an array
  // map each character in the array, if it is a a-z character then map to NATO alphabet
  //return joined array

  function to_nato(words) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return words.toLowerCase().split(' ').join('').split('').map((x)=> alpha.includes(x) ? x = NATO[x] : x).join(' ')
  }