//Following program checks if given string is isogram or not and returns true or false
function isIsogram(str){
return new Set(str.toUpperCase()).size==str.length}
