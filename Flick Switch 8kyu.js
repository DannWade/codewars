// Create a function that always returns true for every item in a given list. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr){
    let sw = true;
    let empty = [];
    arr.forEach((x,i)=>{
      if(x=="flick"){sw= !sw}
      empty.push(sw)
    })
    return empty
  }