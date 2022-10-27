// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

//answer

function squares(x, n) {
    if(n>0){
    let arr =[x]
    for (let i=0;i<n-1;i++){
      arr.push(Math.pow(arr[i],2))
    }
    return arr
    }else{
    return arr=[]
    }
  }