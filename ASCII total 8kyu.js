// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

//answer

function uniTotal (string) {
    let sum = 0
    for (let i = 0 ;i <string.length; i++){
      sum += string.charCodeAt(i)
    }
    return sum
  }