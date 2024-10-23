//parameters: array of numbers
//return: array
//example: if array is [101] then return ["e"]
//pseudo: define a variable and store the ASCII character codes for vowels as an array. Map the array, if ACII character code is found in the vowel array, replace it with the vowel. Return the final array.
function isVow(a){
    let vowels = [97,101,105,111,117]
    return a.map((x)=> vowels.includes(x)==true ? String.fromCharCode(x):x)
  }