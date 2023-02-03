// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

//answer 

function nearestSq(n){
    let up = n
    let down = n
    while(true){
      if (Number.isInteger(Math.sqrt(up))){
        return up
      } else if (Number.isInteger(Math.sqrt(down))){
        return down
      }else{
        up ++
        down --
      }
    }
}