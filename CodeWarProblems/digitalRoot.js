// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. T
// he input will be a non-negative integer.

  function digitalRoot(n) {
  if (n<10){
    return n
  }
  let sum=0
  
  while(n>0){
//     for first case n=16
  sum=sum+n%10
//   0+16%10=6=>6+0
//second iteration
// n=1 so sum=6+n%10=>1
  n=Math.floor(n/10)
//   16/10=>1
  }
  return digitalRoot(sum)
  }

