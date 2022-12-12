// Splits a number into parts and find its persistive multiplicative identity => 24=>2*4=>8
function persistence(num) {
 let half=num.split('');
 let squared=half*half;
  squared.length===1?squared:null
}
