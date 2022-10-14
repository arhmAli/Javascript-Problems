
// hoisting in Javascript
let a="hello";
let arrow=()=>{
const a=10;
return console.log(a)
//   a will be 10 as the scope is defined here as 10
}
arrow() 
// a will be hello as the global scope suggests 
console.log(a)
a===10?console.log("inside function") :return Console.log("outside");
