// Create a function called args_count that returns the number of arguments provided
//answer

function args_count(...argus){
    let count = []
    for (let arg of argus){
      count.push(arg)
    }
    return count.length
  }