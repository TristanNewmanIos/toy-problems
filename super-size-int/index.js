// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(int){
    let intStr = int.toString()
    const strArr = intStr.split('')
    const result = parseInt(strArr.sort().reverse().join(''))
  
    return result
  }
  
  console.log(superSize(12))