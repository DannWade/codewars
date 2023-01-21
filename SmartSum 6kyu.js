// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

//answer

function smartSum(...args){
    return args.reduce((acc,x)=> acc+= (Array.isArray(x)? smartSum(...x): x),0)
  }