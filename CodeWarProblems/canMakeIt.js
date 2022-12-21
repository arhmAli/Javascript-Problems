const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 
  let rem=distanceToPump%fuelLeft;
  return mpg*fuelLeft>=distanceToPump?true:false
//return ?true:false
};

///50 miles away
//mpg ==25
// 2 gallon left
//150/75===2
//200/100
//350/25
//100%1
//50%2
