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
