// Keeping a Zen garden clean is hard work.

// Write a function that, given a string, replaces any word that is not "rock" or "gravel" with the word "gravel"

// For example, if you were passed a string that contained "slug spider rock gravel rock beetle", your function would return "gravel gravel rock gravel rock gravel"

function toGravel (str){
    let strArray = str.split(" ")
  
    let graveledArray = strArray.map(word =>{
      if (word !== "rock"){
        return "gravel"
      }
      else{
        return word
      }
    })
  
    let graveledStr = graveledArray.join(" ")
  
    return graveledStr
  }
  
  console.log(toGravel("slug spider rock gravel rock beetle"))