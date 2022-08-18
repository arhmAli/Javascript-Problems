alert("hey")
let anArray=["first","second","third","fourth"]
console.log(anArray)
anArray.map(n=>{
    anArray.push("fifth","sixth")
    let newArray=[anArray];
    console.log(newArray)
})

let secondArray=[1,2,3,4,5]
secondArray.map(n=>{        // adds one in every element of array
    let here=n+1;
    console.log(here)
})
let realArray=[];
let thirdArray=[1,2,3,4,5]
let sumArray=thirdArray.map(n=>{        // adds one in every element of array and stores the result in the new array
let here=[...thirdArray,n+1];
    realArray=here;
    console.log(here)
})
console.log(`this is the real array of sums : ${realArray} `)
console.log(realArray)
realArray.push(66);
console.log(realArray)
