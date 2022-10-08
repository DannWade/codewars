
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)




//answer

function DNAStrand(dna){
    let comps =[]
    dna.split('').forEach(x=>{
      if(x==='A'){
        comps.push('T')
      } else if(x==='T'){
        comps.push('A')
      }else if(x==='C'){
        comps.push('G')
      }else if (x==='G'){
        comps.push('C')
      }
      })
      return comps.join('')
  }