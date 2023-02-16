function betterThanAverage(classPoints, yourPoints) {
  let sum=0;
  classPoints.reduce((acc,curr)=>sum=acc+curr);
  let avg=sum/classPoints.length;
  return avg>yourPoints?false:true
}
