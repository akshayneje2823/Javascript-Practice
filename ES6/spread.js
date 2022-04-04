//SPREAD OPERATORS WITH OBJECT
const personalData = {
    name:"Akshay Neje",
    email : "akshayneje2823@gmail.com",
    age : 23,
};
const loginDetails = {
    userName :"Akshay Neje",
    passwaord : 123456,
    email :  "akshayneje2823@gmail.com",
};
const userDetails = {
    ...personalData,
    ...loginDetails,
};
console.log(userDetails);
console.log(personalData);

