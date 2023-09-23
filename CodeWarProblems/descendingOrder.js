// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in 
// descending order. 
// Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(n){
  let arr=String(n).split('').map(Number)
  let srt=arr.sort().reverse()
  return Number(srt.join(''))
}

//i retried after some days and this was my approach this time:
function descendingOrder(n){
  let arr=n.toString().split('')
  let fil=arr.map((item)=>+(item))
  let srt=fil.sort((a,b)=>b-a)
  return +(srt.join(''))
}
//tells that u cant cram urself to be a programmer so learn to solve the programmer dont "remember how to solve a problem"
