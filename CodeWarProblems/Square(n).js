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
