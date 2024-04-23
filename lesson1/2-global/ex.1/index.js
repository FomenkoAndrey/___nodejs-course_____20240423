// ! 1
// var a = 10
// console.log(a === window.a)

// ! 2
var a = 10

console.log(a === global.a)

// ! 3
const b = 20

global.b = 20
console.log(b === global.b)
