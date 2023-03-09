THE FOLLOWING PROGRAM CAN TURN AN ARRAY TO AN OBJECT
THIS IS ONE OF THE MANY WAYS

const convertor=(arr)=>{
let convert=arr.reduce((acc,it)=>
return {[acc],it:it},{})
return convert
}
