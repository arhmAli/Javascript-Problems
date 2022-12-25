//finding min and max in an array and returning it

function minMax(arr){
  let min=Math.min(...arr);
  let max=Math.max(...arr)
  return [min,max]
}
