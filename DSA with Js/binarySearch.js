// The following program is used to implement binary search
// algorithim it will find out the index of the particular value 
// that we want to search from a given array 

const binarySearch=(arr,num)=>{
    console.log(`The given array without sorting is [${arr}]`)
    //sort the array
    let array=arr.sort(function(a,b){return a-b})
    //console log the sorted array
    console.log(`The sorted array now is [${array}]`)
    //Main logic
    //Find the min and max index of that array simple!
    let min=0;
    let max=array.length-1;
    //it is to note that the max index is lenght -1 because lenght
    //starts at 1 while index starts at 0
    
    //Now the main function is below
    
    while(min<=max){
        let midIndex=Math.floor((min+max)/2);
        if(array[midIndex]<num){
        min=midIndex+1;
        }
        else if(array[midIndex]>num){
            max=midIndex-1
        }
        else{
            return console.log(`The index of the ${num} in the sorted array is ${midIndex}`)
        }
        }
        
    }
    
binarySearch([1,10,25,67,22,86,45],67)
