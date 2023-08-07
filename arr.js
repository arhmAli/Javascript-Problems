
count number of times sum of 5 appears


const kill= (target,arr)=>{
    let sum=undefined
    for (let i=0 ;i <=arr.length+1;i++){
    if(arr[i]+arr[i+1]===target){
        sum=console.log("Sum exist")
    }
    else{
        sum=console.log("It doesn't exist")
    }
}
    return sum
}
kill(5,[1,4,6,8,1])

enter number store in array



create-vite-app
