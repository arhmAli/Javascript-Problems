function digitize(n) {
  //code here
  let here=parseFloat(n.toString().split('').reverse().join(''))*Math.sign(n)
  let array= Array.from(String(here),Number)
  return array
  }
