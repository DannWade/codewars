// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//answer

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    return arrayOfSheep.reduce((accum,x) => x=== true ? accum+=1:accum+=0)
  }