// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//answer

function findUniq(arr) {
    let sortArr = arr.sort((a,b)=>a-b?1:-1)
    let fil = sortArr.filter((x,i)=> +x== +sortArr[0])
    if(fil.length == 1){
      return fil[0]
    }else{
      return sortArr.filter((x,i)=> x != fil[0])[0]
    }
  }