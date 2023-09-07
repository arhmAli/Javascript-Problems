// You probably know the "like" system from Facebook and other pages.
// People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as 
// shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Sol:
const likes=(name)=>{
  let imputedOne=""
  let imputedTwo=""
  let imputedThird=""
  let baseStr=""
  if (name.length===0){
    baseStr="no one likes this"
  }
  else if(name.length===1){
    imputedOne=name[0]
    baseStr=`${imputedOne} likes this`
  }
  else if(name.length===2){
      imputedOne=name[0]
      imputedTwo=name[1]
      baseStr=`${imputedOne} and ${imputedTwo} like this`
  }
  else if(name.length===3){
      imputedOne=name[0]
      imputedTwo=name[1]
      imputedThird=name[2]
      baseStr=`${imputedOne}, ${imputedTwo} and ${imputedThird} like this`
  }
  else{
    let first=name.slice(0,1)
    let second=name.slice(1,2)
    let third=name.slice(2,3)
    let rest=name.length-2
    imputedOne=first
    imputedTwo=second
    imputedThird=third
    baseStr=`${imputedOne}, ${imputedTwo} and ${rest} others like this`
  }
  return baseStr
}
