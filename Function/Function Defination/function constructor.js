const constructorfunction = new Function("a","b","return a*b");
let x = constructorfunction(32,78)
console.log(x)