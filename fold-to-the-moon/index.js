// Description:

//Tristan's
// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//384,400 km to the moon

//https://www.codewars.com/kata/folding-your-way-to-the-moon




//My Solution - for loop
function forFold(distance) {
    if(distance < 0)
      return null;
    let currThickness = .0001;
    for(var folds = 0; currThickness < distance; folds++) {
      currThickness *= 2;
    }
    return folds;
  }
  console.log(forFold(384400000))
  
  
  
  
  
  
  
  //My Solution - while loop
  function whileFold(distance) {
    if(distance < 0)
      return null;
    let currThick = .0001;
    let times = 0;
    while(currThick < distance) {
      currThick *= 2;
      times++;
    }
    return times;
  }
  
  // console.log(whileFold(384400000))
  
  //Chris
  let moonDistance = 384400
  
  function foldToPlace(distanceInKilometers) {
   let paperThickness = .0000001
   let folds = 0;
   while(paperThickness < distanceInKilometers) {
     paperThickness *= 2
     folds++
   }
   return folds
  }
  
  foldToPlace(moonDistance)