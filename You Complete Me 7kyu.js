// Task: concatenate one or more letters to the end of a given input string to create a string that reads the same forward as backward.

// Specifications

// Letters can only be added to the right hand side of the input string.

// You are required to add at least one letter to the input string.

// The shorter return string is the correct one. ie.. (ab)=> abba is Wrong, while (ab)=> aba is Right.

// Inputs will consist of one or more letters, upper and lower case.

// Strings are case sensitive. ie..(Gn)=> gng is Wrong, while (Gn)=> GnG is right.

// Examples:

// (a) => a + a => aa

// (GG) => GG + G => GGG

// (Ab) => Ab + A => AbA

// (aba) => aba + ba => ababa

// (aab) => aab + aa => aabaa


//PREP
//P: string 
//R: string
//E:("aOOa"), "aOOaOOa"
//P: declare a newstr variable that will the second half of the new palindrome
  //initiate a for loop adding a letter from str to new str, 
  //reverses newstr and concatenates that to str,
  // tests if the concatenation is a palindrome

    //answer
  const complete = str =>{
    let newStr = ''
    for (let i=0; i<str.length;i++){
      newStr += str[i]
      let concat = str + newStr.split('').reverse().join('')
      if (concat == concat.split('').reverse().join('')){return concat}
    }
  } 