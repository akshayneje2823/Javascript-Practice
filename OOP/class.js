// class hello {
//   message(){
//     console.log("Hello");
//   }
//   method(){
//     console.log("it's a second mehod");
//   }
// };
// let a = new hello();
// a.message();
// a.method();


// class Student{
//   constructor(name,age){
//     this.studentName = name;
//     this.studentAge  = age;
//     console.log("Constructor Function");
//   }
//   hello(){
//     console.log("Hello " + this.studentName + "  Your Age Is " + this.studentAge);
//   }
// };
// let a = new Student("AKSHAY",25);
// a.hello();
// // let b = new Akshay();   // both are diffrent objects


class Data{
  constructor(id,name){
    this.dataid = id;
    this.dataname = name
    console.log("Hello");
  }
  PreData(){
    console.log(`${this.dataid} ${this.dataname}`);

  }
};
let c = new Data(101,"Akshay");
c.PreData();
let d = new Data(102,"Darshan");
d.PreData();                           //CODE REUSEABILITY

//STATIC METHOD

class STATIC {
  static static(){
    console.log("This Is Static Method");
  }
}
//HOW TO EXECUTE
STATIC.static();