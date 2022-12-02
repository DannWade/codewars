// The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

// 8 + 1 = 9 and 92 = 81

// 512 = 5 + 1 + 2 = 8 and 83 = 512

// We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

// answer

function powerSumDigTerm(n) {
    let count = 10
    for (let i=0;i<=n;i++){
        count++
      while((count != Math.pow(String(count).split('').reduce((accum,x)=>accum+= +x,0),String(count).split('').length)) && (i!=n)){
        count++
      }
    }
  return count-1
}

