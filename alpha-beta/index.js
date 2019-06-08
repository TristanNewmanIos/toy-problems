// Write a function called ABCheck that takes in a string parameter and returns true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b).

// Otherwise return false.

// For a greater challenge, try to solve this problem using an array method like .forEach or .map

function ABCheck(str){
    let strArray = str.split("")
    let aToBCount = 0
  
    strArray.map(char =>{
  
      console.log(aToBCount + " " + char)
      
      if((aToBCount == 3 && char === 'a') || (aToBCount == 3 && char === 'b')){
        // console.log(true)
        return true
      }
      else if(char === 'a' || char === 'b'){
        aToBCount = 0
      }
      else{
        aToBCount++
      }
    })
  
    return false
  }
  
  ABCheck("lane borrowed") //true
  ABCheck("play basketball") //false