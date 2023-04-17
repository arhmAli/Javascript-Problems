function looper(n) {
    for (let i=0;i<n;i++){
        for (let j=0;j<n;j++){
            console.log(i,j)
        }
    }
}
let t1=performance.now()
looper(1000)
let t2=performance.now()
console.log(t2-t1)
//The following Example has a O(n^2)//
//It also takes 6.19 ms to compile//
//For 1000 n the program takes 931230ms//
