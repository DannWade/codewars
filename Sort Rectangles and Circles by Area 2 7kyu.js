// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

//answer

function sortByArea(array) {
    return array.sort((a,b) => calcArea(a)>calcArea(b)?1:-1)
   }
   
   function calcArea (element){
     if(Array.isArray(element)){
       return element[0]*element[1]
     } else{
       return 2*3.14*element
     }
   }