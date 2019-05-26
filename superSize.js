// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num){

    //create result array
  
    //break up the integer
  
    //hash map for is largest number
  
    //add number to result array if largest
  
    // delete from hash map if largest
  
    /*********** */
    //slice array
    let numStr = toString(num)
    let numArray = numStr.slice('')
  
    //set largest with for loop
    let largestNum = 0
  
    //mark location
    let largestNumIndex = 0
  
    for(i=0; i < numArray.length; i++){
      if(numArray[i] > largestNum){
        largestNum = numArray[i]
        largestNumIndex = i
      }
    }
  
    //splice at location
    numArray = numArray.splice(largestNumIndex, 1)
  
    //add to result array
    let result = []
    result.push(largestNum)
    largestNum = 0
  
    //repeat
    //join array
  
    //Largest possible value of rearranged integer
    // return result
  }
  
  console.log(superSize(123456))