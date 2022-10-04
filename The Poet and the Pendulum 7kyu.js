// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

//answer

function pendulum(values) {
    let ordered = values.sort((a,b)=>a>b?1:-1)
    let pendulum = []
    pendulum.push(ordered[0])
    for (let i =1;i<ordered.length;i+=2){
      pendulum.push(ordered[i])
      if (ordered[i+1]===undefined){
        break
      } else{
      pendulum.unshift(ordered[i+1])
      }
    }
    return pendulum
}