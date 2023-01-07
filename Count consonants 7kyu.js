// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.


function consonantCount(str) {
    let newArr = [] || 0
    let arr= 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'.split('')
    if (str == ""){return 0}else{
    str.split('').forEach((x,i)=>{
      if (arr.includes(x)){
        newArr.push(x)
      }
    })
      }
    return newArr.length
}