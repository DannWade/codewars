// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

//answer

function expandedForm(num) {
    let str = []
    for(let i=0;i < String(num).length;i++){
      let newNum = +String(num).split('').slice(i).join('')
      if(newNum % (Math.pow(10,String(newNum).length))>=1){
        str.push((+String(num)[i])*Math.pow(10,String(newNum).length - 1))
      }
    }
    return str.filter((x)=>x!='0').join(' + ')
  }