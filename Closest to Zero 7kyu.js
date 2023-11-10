// Simply find the closest value to zero from the list. Notice that there are negatives in the list.

// List is always not empty and contains only integers. Return None if it is not possible to define only one of such values. And of course, we are expecting 0 as closest value to zero.

// Examples:

// [2, 4, -1, -3]  => -1
// [5, 2, -2]      => None
// [5, 2, 2]       => 2
// [13, 0, -6]     => 0

function closest(arr){
    let n = 1000
    let k = 1000
    let r = Array.from(new Set(arr))
    r.forEach((x,i)=>{
      if(Math.abs(x) == Math.abs(n)){k=n}
      if(Math.abs(x)<=Math.abs(n)){n=x}
    })
    return Math.abs(n) == Math.abs(k) ? null : n
  }