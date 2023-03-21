// Your task is to find all the elements of an array that are non consecutive.

// A number is non consecutive if it is not exactly one larger than the previous element in the array. The first element gets a pass and is never considered non consecutive.

// Create a function named allNonConsecutive

// E.g., if we have an array [1,2,3,4,6,7,8,15,16] then 6 and 15 are non-consecutive.

// You should return the results as an array of objects with two values i: <the index of the non-consecutive number> and n: <the non-consecutive number>.



function allNonConsecutive (arr) {
    let nonCon = []
     for(let j=1;j<arr.length ; j++){
       if(arr[j] != arr[j-1] + 1){nonCon.push({i:j,n:arr[j]})}
     }
     return nonCon
   }