//Takes an array checks the sum inside is even || Odd?
function oddOrEven(array) {
  let sum=0;
  let here=array.forEach(item=> sum+=item);
  if(here/2===0){
    return "even"
  }
  else{
    return "odd"
  }
}
