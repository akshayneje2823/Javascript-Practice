//  Before invoking we can call the javascript function nothing but hoisting

console.log(myFunction(3,4));

function myFunction(a,c){
    return a*c
}