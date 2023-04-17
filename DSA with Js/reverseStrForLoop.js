function reducer(s) {
    let newStr=" ";
    for (let i=s.length-1;i>=0;i--){
    newStr+=s[i]
    }
return newStr
}
let t1=performance.now()
console.log(reducer("gankjangakngajgnakgnajgnankam"))
let t2=performance.now()
console.log(t2-t1)
