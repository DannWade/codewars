// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

function sumArray(array) {
    return  array == null ? 0 : array.length<3 ? 0 : array.sort((a,b)=>a-b).splice(1,array.length-2).reduce((acc,x)=>acc+=x,0)
    }