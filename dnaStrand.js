// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

function DNAStrand (str){

    let strArray = str.split('')
    let result = []
  
    strArray.forEach((char)=>{
      if(char === 'A'){
        result.push('T')
      }
      else if(char === 'T'){
        result.push('A')
      }
      else if(char === 'C'){
        result.push('G')
      }
      else if(char === 'G'){
        result.push('C')
      }
  
    })
  
    return result.join('')
  }
  
  console.log(DNAStrand("ATTGC"))