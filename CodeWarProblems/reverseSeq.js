const reverseSeq = n => {
  let arr=[];
  let ind=0;
  for(let i=n;i>0;i--){
    
    arr[ind]=i;
    ind++
    
  }
  return arr;
};
