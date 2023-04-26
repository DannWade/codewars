// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:


function flattenAndSort(array) {
    let r =[]
    array.forEach((x,i)=> r.push(...x))
    return r.sort((a,b)=>a-b)
  }