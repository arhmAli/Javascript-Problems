// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// Approach:1

function findOdd(A) {
  let obj={}
  for(let i=0;i<A.length;i++){
    let curr=A[i]
    if(obj[curr]){
      obj[curr]++
    }
    else{
      obj[curr]=1
    }
  }
  let arr=[]
  for (let num in obj){
    if(obj[num]%2===1){
      arr.push(Number(num))
    }
  }
  return Number(arr);
}

