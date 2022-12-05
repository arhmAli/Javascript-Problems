
/////////*******INPUT TAKING***********////////////
let input =float(prompt("Enter weight  :"));
let inputWeight=prompt("Which unit u want your weight to be converted? K or Lb");


//////************ Conversion *********////////////
if (inputWeight==="K"){
input=input*2.20462;
return console.log(`Your weight is ${input}`)
}
else if(inputWeight==="Lb"){
input = input/2.20462;
  return console.log(`Your weght is ${input}`);
}
///////////*****************If not right***********/////////
else{
console.log("Please enter a valid character try K or Lb")
}
