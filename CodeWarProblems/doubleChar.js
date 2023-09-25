// Given a string, you have to return 
// a string in which each character (case-sensitive) is repeated once.

  function doubleChar(str) {
  let arr=str.split('')
  let res=arr.map((item)=>item+item)
  return res.join('')
}
