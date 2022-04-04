console.log("Callback");
const students = [

    {name : "Akshay",subject : "Javascript"},
    {name : "Tejas",subject : "Paython"},
];

function enrollStudent(student,Callback){
    setTimeout(function() {
        students.push(student)
        console.log("students has been enrolled");
        Callback();
    }, 3000);
 } 

 function getStudents(){ 
    setTimeout(function()  {
       let str ="";
       students.forEach(function(student){
           str += `<li>${students.name}</li>`
       });
       document.getElementById('students').innerHTML = str;
       console.log("students hav been fetched");
    }, 1000); 
}
    let newStudents = {name : "sunny",subject : "Machine Learning"};
    enrollStudent(newStudents,getStudents());
    


