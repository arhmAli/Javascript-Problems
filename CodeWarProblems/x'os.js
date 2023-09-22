
// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case sensitive.
// The string can contain any char.
function XO(str) {
    let arr=str.split('')
    let x=arr.filter((el)=>el.toLowerCase()==='x').length
    let o=arr.filter((el=>el.toLowerCase()==='o')).length
    return x===o
}
