// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// // You get a string with numbers only


function computerToPhone(numbers){
    let phone = {'0':'0','7':'1','8':'2','9':'3','4':'4','5':'5','6':'6','1':'7','2':'8','3':'9'}
    return numbers.split('').map((x,i)=> x=phone[x]).join('')
  }