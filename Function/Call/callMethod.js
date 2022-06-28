const Person = {
    fullName : function(country){
        return this.firstName + " " + this.lastName +" from "+ country
    }
}
const person1 = {
    firstName:"Akahay",
    lastName: "Neje"
} 

const person2 = {
    firstName:"Darshan",
    lastName:"Kamate"
}

console.log(Person.fullName.call(person1,"Maharashtra"))
console.log(Person.fullName.call(person2,"Maharashtra"))