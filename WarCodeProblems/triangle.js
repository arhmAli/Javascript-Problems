//Program to check if given points form a triangle or not
function isTriangle(a,b,c)
{
  if(a+b>c&&b+c>a&&c+a>b){
    return true
  } 
  else{
  return false
  };
}
