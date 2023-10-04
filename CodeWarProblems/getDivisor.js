function getDivisorsCnt(n){
  let count=[]
  for(let i =1;i<=n;i++){
    if(n%i===0){
      count.push(i)
    }
  }
  return count.length
}
}
