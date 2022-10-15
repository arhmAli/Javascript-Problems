// Higher Order Function

let something=()=>{
    let a=5;
    const func=()=>{
        let a=10
        console.log(this.a)
    }
    console.log(this.a)
}
something()