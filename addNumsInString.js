// Write a function that takes in a string.  That string may or may not have a number at the end of it.

// If the string has a number at the end, increment that number by one, maintaining the same number of digits as the original number if possible.
// E.G.: Word001 becomes Word002.  Word099 becomes Word100. Word0099 becomes Word0100.

// You may increase the length of the original number only if necessary:
// E.G.: Word999 becomes Word1000. 

// If the string has no number at the end, add the number 1 to the end of it.
// E.G. "Tacos" becomes "Tacos1"

// Return the result as a concatenated string.

function strFun (str){

    let result = []
    let newNumArray = []
  
    //split up the str
    const strArray = str.split('')
  
    //seperate the NaN from numbers
    const nanArray = strArray.filter(number =>{
      return isNaN(number)
    })
    let numArray = strArray.filter(number =>{
      return !isNaN(number)
    })
  
    //retain the numbers
    let lastNum = numArray[numArray.length - 1]
  
    //if it in increase the number of digits, add the other digits to the equation
    let zeroCount = 0
  
    if(lastNum == 9){
      
      for(i = 0; i < numArray.length; i++){
        if (numArray[i] == 0) {
          zeroCount++
        }
        else{
          i = numArray.length
        }
      }
  
  
      for(zeroCount--; zeroCount > 0; zeroCount--){
        result.push(0)
      }
  
      newNum = parseInt(numArray.join(''))
      newNum++
  
      result.push(newNum)
    }
  
    //increment the last by 1
    // lastNum++
  
    //join the letters and numbers
    // result = result.unshift(nanArray)
    result = nanArray.concat(result)
    result = result.join('')
  
    return result
  }
  
  console.log(strFun("Word009"))