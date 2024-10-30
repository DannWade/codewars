var countSheep = function (num){
    //parameter: non-negative number
    //return: string
    //example:3,"1 sheep...2 sheep...3 sheep..."
    //pseudo: for loop that takes iterates the number of times indicated in the parameter of the function, adding another string to the string defined within a variable outside of the for loop. after compeltion, return the finished string.
    let sheep = ""
    for(let i=1;i<=num;i++){
      sheep+=`${i} sheep...`
    }
    return num==0 ? '' : sheep
  }