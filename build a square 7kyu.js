// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

//answer

function generateShape(integer){
    return ('+'.repeat(integer)+'\n').repeat(integer).trim()
  }