Write a function called 'nthFibonacci' that takes an integer n as an
argument and returns the nth number in the Fibonacci sequence.

// classical approach
function fib(n:number){
  if(n<=1){
    return n
  }
  let prevNum:number =0;
  let currNum:number=1;

  for (let i=2;i<=n;i++){
    let fibNext:number=prevNum+currNum;
    prevNum=currNum;
    currNum=fibNext;
  }
  return currNum
}

// if used the recursive approach
function fib(n:number){
 if(n<=1){
    return n
  }
  return fib(n-1) + fib(n-2)
}
