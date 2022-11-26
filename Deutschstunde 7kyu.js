// Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

// each noun containing less than 2 vowels has the article "das"
// each noun containing 2/3 vowels has the article "die"
// each noun containing more than 3 vowels has the article "der"
// Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

// answer

function derDieDas(wort){
    let count = wort.match(/[aeiouäöü]/gi)
    if (count!= null){
      count = wort.match(/[aeiouäöü]/gi).length
    }else{
      count = 0
    }
    return count == null ? 'das '+ wort: count < 2 ? 'das ' + wort : count<4? 'die ' + wort : 'der ' + wort
   }