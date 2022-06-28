function myFunction(arg1,arg2){
    this.firstname = arg1;
    this.lastname = arg2;
}
const myObj = new myFunction("John","Patil");
console.log(myObj.fisrtName)