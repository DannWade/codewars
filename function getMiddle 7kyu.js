function getMiddle(s) {
    //parameters:string
    //return: string
    //example: "test" --> "es"
    //psuedo: break apart string from into array, determine if length of string is even or odd, if odd, then take middlle character, if even, then return two middle characters joined together. return the final string
    let ar = s.toString().split('')
    let n = []
    if(ar.length%2==0){    
      n.push((ar[(ar.length/2)-1]))
      n.push(ar[ar.length/2])
    }else{
      n.push(ar[((ar.length+1)/2)-1])
    }
    return s.length ==1 ? s : n.join('')
    }