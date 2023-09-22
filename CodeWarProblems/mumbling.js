// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	let arr= s.split('')
  let res=[]
  for(let i=0;i<arr.length;i++){
    res[i]=arr[i].toUpperCase()+arr[i].toLowerCase().repeat(i)
  }
  return res.join("-")
}
