// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    let comb =  a.concat(b)
    let nodup = Array.from(new Set(comb))
    return nodup.sort((a,b)=>a-b)
  }