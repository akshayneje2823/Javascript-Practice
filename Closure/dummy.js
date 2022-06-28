// let counter = 0;
// function Add() {
//     counter += 1;
// }
// console.log(Add())
// console.log(Add())
// console.log(Add())


// function myFunction(){
//     let a = 3;
//     console.log(a)
//     return a*a
// }
// console.log(myfunction(2))
// console.log(a)

const add = (function(){
    let counter = 0;
    return function () {counter +=1; return counter}
})()
console.log(add())
console.log(add())
console.log(add())
console.log(add())