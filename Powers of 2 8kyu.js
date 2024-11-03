function powersOfTwo(n){
    //parameter: integer
    //return: array of all powers of two from 0 to n
    //example:n = 1  ==> [1, 2] 
    //pseudo: define an empty array. Use a for loop to iterate 0 to n. Within the loop, push to the array a power of 2^i. Once loop complete, return the array
    let twos = []
    for(let i=0;i<=n;i++){
      twos.push(2**i)
    }
    return twos
  }