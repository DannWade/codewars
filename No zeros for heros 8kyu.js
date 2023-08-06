// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
    let newN = new String(n).split('')
    while(newN[newN.length-1]=='0'){
      newN = newN.slice(0,newN.length-1)
    }
    return +newN.join('')
  }