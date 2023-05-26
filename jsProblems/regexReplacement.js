function camelCase(string){
    let regex=/([0-9])/g
    let str=string.replace(regex,' $&')
    return console.log(str)
}
camelCase("helloWorl2d1Here123")
//The difference between $1 and $& is that
//the first one will take the first instance of the helloWorl2d1Here123
//but the $& will get entire substring
let regexTest=(pattern)=>{
    let regex=/(\d+)-(\w+)/
    let replacement=pattern.replace(regex,"$&")
    return console.log(replacement)
}
regexTest("1234-abcd")
regexTest("1234-abcd")
//In the following example it is clear that when i 
//used $1 sign it only gabe the first instance of the giben requirement
//while if i used $& it gabe the whole subtring
