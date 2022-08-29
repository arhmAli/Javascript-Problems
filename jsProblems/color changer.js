const theDiv = document.querySelector(".top");
const theBtn = document.querySelector("button")
const bigBox = document.querySelector("section")
let theColor = ["Blue", "Pink", "Salmon", "Orange"];
let backgroundColorarray = ["Green", "Aqua", "Magenta"]
const reset = function() {
    return theColor[idx]
}
let idx = Math.floor(Math.random() * theColor.length);
let idxTwo = Math.floor(Math.random() * backgroundColorarray.length);

theBtn.addEventListener("click", () => {
    theDiv.style.backgroundColor = theColor[idx];
    bigBox.style.backgroundColor = backgroundColorarray[idxTwo]
    console.log(theColor[idx])
    console.log(backgroundColorarray[idxTwo])
    reset()
})
console.log(reset())