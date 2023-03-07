// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

//PREP
//P: string
//R: string with certain letters replaced
//E:"Fund4m3nt41s"),"Fund4m3nt41s"
//P: split the text into an array
    // use the map method to loop through each element in the array
    // if element matches to character specified within instructions, replace it with corresponding character
    //return joined string

    function nerdify(txt){
        return txt.split('').map((x,i)=> x==='a'|| x=='A' ? x='4':
          x=='e' || x=='E' ? x='3':
          x=="l"? x='1':
          x=x).join('')
        
      }