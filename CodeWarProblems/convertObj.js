THE FOLLOWING PROGRAM CAN TURN AN ARRAY TO AN OBJECT
THIS IS ONE OF THE MANY WAYS

const convertor=(arr)=>{
let convert=arr.reduce((acc,it)=>
return {[acc],it:it},{})
return convert
}

We can also use a builtin function

const convertorBuilt=(arr)=>{
return Object.assign({},arr)
}

The object.assign will put the indices as default keys

3rd approach is to simply use spread operator:

const spreadConvertor=(arr)=>{
return {...arr}
}

... enclosed with {} will take out the indices as keys of objects
