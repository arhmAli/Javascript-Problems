// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.




function squareSum(numbers){
let sum=null;
let sq=[];
  let ind=0;
//numbers.forEach((item)=>{sum=sum+item^2})
  for(let i=0;i<=numbers.length-1;i++){
    sq[ind]=numbers[i]*numbers[i]
    ind++
  }
  sq=sq.reduce((a,b)=>a+b,0)
//   sq.forEach((item)=>{
//     sum=item+sum
//   })
return sq
}
