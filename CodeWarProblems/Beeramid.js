// Statement:
 Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! 
 To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, 
 and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's 
 pretend it's Friday too.
 A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...
 Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:
 your referral bonus, and
 the price of a beer can

var beeramid = function(bonus, price) {
// first of all i calculated the number of cans that i can buy
  let cans=Math.floor(bonus/price)
  let levels=0
  while(cans>=Math.pow(levels+1,2)){
    cans=cans-Math.pow(levels+1,2)
    levels++
  }
  return levels
}
//   The main logic which i thought of is that
//   untill cans are >= to levels^2 i will decrement each level from the cans
//   the no of cans will decrease uptill this point
//   for instance 
//   9,2==> 4
//   for first iteration 4>=1
//   so cans=4-1
//   level=1
//   second iteration 3!>=4
//   so levels are 1
  
