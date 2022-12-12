//Checks for a unique number in a array and returns it
function findUniq(arr) {
  return arr.filter((item,ind)=>(item[ind-1].value!===item[ind].value?item[ind]:null)) 
}
//OR
function findUniq(arr) {
  return arr.filter((item,ind,self)=>(item.IndOf[ind].value!===item.lastIndOf[ind].value?item.lastIndOf[ind]:null))
 
}
