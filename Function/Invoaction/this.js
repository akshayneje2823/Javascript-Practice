let x = myFunction();

function myFunction(){
    return this;
}
// console.log(myFunction())


const myObj = {
    fisrtName :"joy",
    lastName  :"Tribiyani",
    fullName: function (){
        return this.fisrtName + " " + this.lastName
    }
}
console.log(myObj.fullName())