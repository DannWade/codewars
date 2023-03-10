// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.


//PREP
//P: string
//R: string with vowels capitalized
//E: HelloWorld!", "HEllOWOrld!
//P: define array with vowels as elements
  //map each element with callback that check if element is in vowels array, if so then it maps a capitalized vowel

  function swap (string) {
    let vowels = ['a','e','i','o','u']
    return string.split('').map((x,i)=> vowels.includes(x) ? x= x.toUpperCase():x=x).join('');
  }