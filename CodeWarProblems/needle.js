function findNeedle(haystack) {
  // your code here
  let search="needle"
  let ind=undefined;
  for(let i=0;i<haystack.length-1;i++){
    if(haystack[i]==="needle"){
      ind=i;
    }
  }
  return `found the needle at position ${ind}`
}
