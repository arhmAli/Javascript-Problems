//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:




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
