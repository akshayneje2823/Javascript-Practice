let a = [1,2,3,4];
let b = [...a]
b.push(6);
// b.pop(10);
// console.log(b);

let carName1 = ["Odddi","Benz","BMW"];
let carName2 = ["Omni","Bullero"];
carName2.push("Thar");
let getData = [...carName1, ...carName2];
//console.log(getData);


let size = [34,36,38,40];
let new_Size =[...size,42,44]
//console.log(new_Size);



console.log(Math.max(5,6,7));
console.log(Math.max([5,6,7]));
console.log(Math.max(...[5,6,7]));

