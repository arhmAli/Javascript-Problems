function adder(n) {
    let total=0;
    for(let i=0;i<=n;i++){
        total+=i
    }
return total
}
let t1=performance.now()
console.log(adder(1000000))
let t2=performance.now()
console.log(t2-t1)
