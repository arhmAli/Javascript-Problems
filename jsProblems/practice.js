let something=[{
    name:"ali",
    age:23
},
{
    name:"arham",
    age:21
}]
let mapped=something.map((item)=>{
    let fullName=item.name + item.age
    console.log(fullName)
})
mapped;