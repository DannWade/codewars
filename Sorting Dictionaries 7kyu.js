// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.


// answer

function sortDict(dict) {
    let arr = []
    for (let key in dict){
      let newarr = []
      newarr.push(+key || key)
      newarr.push(dict[key])
      arr.push(newarr)
    }
    return arr.sort((a,b)=>a[1]>b[1]?-1:1)
  }