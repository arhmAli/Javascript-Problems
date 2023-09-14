// Complete the function that
// accepts two integer arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

  
var solution = function(firstArray, secondArray) {
  let k=firstArray.length-1
  let sum=[]
//  let ans=null
  for(let i=0;i<=k;i++){
    sum[i]=(Math.abs(firstArray[i]-secondArray[i])**2)
  }
  let ans=sum.reduce((acc,curr)=>{
      return acc+curr
  })
  return ans/(k+1)
}
