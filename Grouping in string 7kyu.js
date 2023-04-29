// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

const isConsecutive = (str) => {  
    let arr = str.split('')
    for(let i = 0;i<arr.length;i++){
      let firstIndex = arr.indexOf(arr[i])
      let lastIndex = arr.lastIndexOf(arr[i])
      let s = arr.slice(firstIndex,lastIndex+1)
      if(s.join('') !== arr.filter((x)=>x==arr[i]).join('')){return false}
    }
    return true
  }