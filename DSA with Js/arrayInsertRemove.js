const methods=(a)=>{
    let len_1=a.length;
     let firstEl=a.shift();
    let addFirst=a.unshift(100);
    let pop =a.pop()    
    let pusher=a.push(10,11);
    let len=a.length;
    let slicer=a.slice(1,3);
    return(
        console.log(`Length before is ${len_1} ${firstEl} unshift [${a}] popping ${pop} pusher[${a}] New lenght is ${len} sliced pract ${slicer}`)
      
    )
}
methods([1,2,3,4,5])
//so in the following example we learnt about push pop & their counter parts 
// Shift is used to remove the first element in an array unshift will add a particular or
//set of elements in an array
//Similarly Pop will remove last element of an array and push will add at last
// so to summarize this Insertion or removal's O(n) depends on where we are inserting or removing.
//The slice method does not INCLUDE THE END of array mentionded (1,3) will get 1 to 2 ,3 not included
