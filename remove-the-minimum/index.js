// Write a function that takes in an array of integers and removes the lowest value, then returns the adjusted array.  If there are multiple instances of the same number, remove the number with the lowest index.  If passed an empty array, your function should return an empty array.

// Do not change the order of the remaining elements of the array.

// EXAMPLE:

// var sampleArr = [9, 2, 7, 3, 1, 5, 6, 4, 8, 1]

// Function should return: [9, 2, 7, 3, 5, 6, 4, 8, 1]

function removeMin(numArr){
    numArr.sort()
    numArr.shift()
    let result = numArr
  
  
    return result
  }
  
  console.log(removeMin([9, 2, 7, 3, 1, 5, 6, 4, 8, 1]))