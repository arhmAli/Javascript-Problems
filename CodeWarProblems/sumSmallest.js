// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

const sumTwoSmallestNumbers=(numbers) => (  
  let sorted=numbers.sort((a,b)=>{
    if (a > b)
        return 1;
    if (a < b)
        return -1;
    return 0;
  })
 let newArray=numbers.slice(0,2)
 let sum=newArray.reduce((a,b)=>(a+b))
  return sum
)
