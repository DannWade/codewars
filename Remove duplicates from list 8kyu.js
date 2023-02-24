// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//answer

function distinct(a) {
    let noDup = []
    a.forEach((x,i) => !noDup.includes(x) ? noDup.push(x): x)
    return noDup
  }