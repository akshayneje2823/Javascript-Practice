const array = [1,2,3];
console.log(array)

function addElementToarray(a,element){
   return [...a,element]
};
console.log(addElementToarray(array,7));
console.log(array)