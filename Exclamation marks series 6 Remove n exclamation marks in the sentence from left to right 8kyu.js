// Remove n exclamation marks in the sentence from left to right. n is positive integer.


function remove(s,n){
    let sentence = s.split("")
    for(let i=1; i<=n; i++){
      let newIndex = sentence.findIndex((x)=>x=="!")
      if (newIndex == -1){return sentence.join("")}
      sentence.splice(newIndex,1)
    }
    return sentence.join("")
  }