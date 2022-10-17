let a = [1, 2, 3, 4, 5];
let maxValue = a.reduce((item, i) => {
    Math.max(item, i)
})
console.log(maxValue)

let secMax = Math.max(...a);
console.log(secMax);

let thirdMax = a.map((item, i) => {
    item[i] > item[i - 1] ? item[i] : item[i - 1]
    console.log(item[i])
    console.log(item[i - 1])
})

