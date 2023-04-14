function adder(n){
    return n*(n-1)/2
}
let t1=performance.now()
console.log(adder(1000000))
let t2=performance.now()
console.log(t2-t1)
