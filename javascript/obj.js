var a ={
    firstName : "Aksahy",
    lastName : "Neje",
    eMail : "akshayneje2823@gmail.com",
    fabMovies : ["dhoom","Sholay","Hum"],
    salary : function () {
        return 20000;},
    fullName : function (){
        return this.firstName + "" + this.lastName
    },    
    address :{
        citty : "Dattawad",
        state : "Maharastra",
        country :"Indian",
    }
  }
// console.log(a);
// console.log(a.firstName);
// console.log(a.salary());
// // console.log(a.fabMovies[1]);
// console.log(a.fullName());
// console.log(a.address);



// var b = new Object();
// b.firstName = "Ram";
// b.lastName = "Neje";
// console.log(b.firstName);
// console.log(b.lastName);


//ARRAY OF OBJECT

// var data = [
//    { fName : "Akshay",age : 23 },
//    {fName : "Darshan",age : 19 },
//    {fName : "Tejas",age : 20},
// ];
// for(var d =0; d < data.length; d++)
// console.log(data[d].fName);


var student = [
    {name:"aram ",age :18},
    {name:"ram ",age :22},

];
for(var d =0; d <student.length; d++)
console.log(student[d].name);