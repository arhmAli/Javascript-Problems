// You're writing code to control your town's
// traffic lights. You need a function to 
// handle each change from green, to yellow, to red, and then to green again.

function updateLight(current) {
  let now=""
  switch(current){
     case "green":
     now = "yellow"
     break
     case "yellow":
      now="red"
      break
     case "red":
      now="green"
      break
  }
   return now
}
