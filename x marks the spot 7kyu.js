// Given a two dimensional array, return the co-ordinates of x.

// If x is not inside the array, or if x appears multiple times, return [].

// The co-ordinates should be zero indexed in row-major order.
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

//answer

const xMarksTheSpot = (input) => {
    let arr = []
    for(let i=0;i<input.length;i++){
      input[i].forEach((x,j)=>{
        if(x ==='x' && arr.length==0){
          arr.push(i)
          arr.push(j)
        } else if(x==='x' && arr !==[]){
          arr =[]
        }
      })
    }
    return arr
  }