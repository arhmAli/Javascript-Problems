// Practing for arrow functions

const squared=(arr)=>(
  let mapped=arr.map((val)=>(
  val*val))
   return mapped
)
//if the syntax is not correct 

// This is a simple problem in which you have an array of numbers and you return the numbers sqaured in array

// Test cases assumptions 

// all entries are positive numbers

//[2,3,4] => [4,9,16]

//For regular function 

function(arr){
let mapped=arr.map((val)=>(val*val))
return mapped
}
