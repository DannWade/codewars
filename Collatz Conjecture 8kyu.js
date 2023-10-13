// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

function hotpo(n){
    let tn = n
    let tot = 0
    if(tn == 1){return 0}
    while(tn != 1){
      if(tn%2==0){
          tn = tn/2
          tot+=1
      }else{
          tn = (tn*3)+1
          tot++
        }
      }}