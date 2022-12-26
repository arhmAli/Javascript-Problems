//finding average of an array

function findAverage(array) {
  // your code here
  let sum=0;


  let newSum=array.reduce((curr,prev)=>curr+prev,sum)
  let den=array.length;
  let average=newSum/den;
  return den===0?0:average;
}
