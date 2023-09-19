// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value,
// remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

  function removeSmallest(num){
  if(num.length===0){
    return []
  }
  let min=Math.min(...num)
  let ind=num.indexOf(min)
  let res=[...num.slice(0,ind),...num.slice(ind+1)]
  return res
  }
