//simple program illustrating reduce method of array
//lets say i have a array of objects or any array
//For simplicity we will have an array of numbers.

let num=[1,2,3,4,5]

//lets solve this array to find out the sum of the array using reduce method.

let sum=num.reduce((a,b)=>a+b,0)
//The above mentioned is the shorthand syntax of reduce method we can explain it more like:

let initialValue=0;

let sumHand=num.reduce((accumulator,currentValue)=>{
return a+b
}initialValue)

//accumulator is just a fancy word of prevValue 

//This will give the sum of the array
console.error(sum)
//This will also give the sum of the array
console.log(sumHand)

