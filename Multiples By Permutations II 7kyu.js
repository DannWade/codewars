// We have two consecutive integers k1 and k2, k2 = k1 + 1

// We need to calculate the lowest strictly positive integer n, such that: the values nk1 and nk2 have the same digits but in different order.

// E.g.# 1:

// k1 = 100
// k2 = 101
// n = 8919
// #Because 8919 * 100 = 891900 
// and      8919 * 101 = 900819
// E.g.# 2:

// k1 = 325
// k2 = 326
// n = 477
// #Because 477 * 325 = 155025
// and      477 * 326 = 155502
// Your task is to prepare a function that will receive the value of k and outputs the value of n.

// The examples given above will be:

// find_lowest_int(100) === 8919
// find_lowest_int(325) ===  477
// Features of the random tests

// 10 < k < 10.000.000.000.000.000 (For Python, Ruby and Haskell)
// 10 < k < 1.000.000.000  (For Javascript and D 1e9)

//PREP
//P:integer
//R:integer
//E:findLowestInt(325),477
//P:define what is k1 and k2 within varaibles
  //initiate a while loop that incrents the loop variable if the loop variable
  // time k1 and k2 do not result in k1 having the same integers as k2

  function findLowestInt(k) {
    let i = 6
    while (i<Number.MAX_SAFE_INTEGER){
        if (String(k*i).split('').sort().join('') == String((k+1)*i).split('').sort().join('')){return i}
          i++
        }
    }