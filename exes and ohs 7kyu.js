// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char

// answer

function XO(str) {
    let xNum = str.toLowerCase().split('').reduce((accum,x)=>x==='x'?accum+=1:accum+=0,0) || 0
    let oNum = str.toLowerCase().split('').reduce((accum,x)=>x==='o'?accum+=1:accum+=0,0) || 0
    return xNum === oNum ? true: false           
}