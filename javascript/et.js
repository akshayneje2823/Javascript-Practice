// let a =[8,74,54,83];
// let new_A =[...a,33,55,5];
// console.log(new_A);
// console.log(Math.max(a));

const personalDetails = {
    name:"Narsmiha Reddy",
    email:"grretlabs@gmail.com",
    age : 30,
};
const loginDetails = {
    userName:"Narsimha",
    password: 123456,
    email:"test@gmail.com",
};
const userDetails ={
    ...personalDetails,
    ...loginDetails,
}

console.log(userDetails);


