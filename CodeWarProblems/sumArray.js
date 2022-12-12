//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.


function sumArray(array) {
  let sum=0;
  if(array===null||array.length===0){
    return 0
  }
  else{
  array.forEach(item => {
    sum += item;
  });  
     let max=Math.max(...array);
    let min=Math.min(...array);
    let diff=max-min;
 
    return diff
  }
}
