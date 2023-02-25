// Please write a function that sums a list, but ignores any duplicate items in the list.

// // For instance, for the list [3, 4, 3, 6] , the function should return 10.

//answer

function sumNoDuplicates(numList) {
    let noDup = []
    numList.forEach((x,i)=> numList.filter((j,k)=> j==x).length ==1 ? noDup.push(x):x)
    return noDup.reduce((acc,x)=> acc +=x,0)
  }