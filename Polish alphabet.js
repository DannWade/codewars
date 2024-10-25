function correctPolishLetters (string) {
    //parameters: string
    //return:string
    //example: Jędrzej Błądziński","Jedrzej Bladzinski"
    //peudo: create object of polish alphabet with key-value pairs, create an array out of string, iterate through string to see if each letter is in alphabet object. If not, continue else, swap polish letter for english letter.Return new string
    let polish = {ą:"a",ć:"c", ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z"}
    return string.split("").map((x)=> polish[x] != undefined ? polish[x] : x).join("")
  }