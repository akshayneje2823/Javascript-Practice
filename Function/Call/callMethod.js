const Person = {
    fullName : function(){
        return this.firstName + " " + this.lastName 
    }
}
const person1 = {
    firstName:"Call",
    lastName: "Mathod"
} 

const person2 = {
    firstName:"Darshan",
    lastName:"Kamate"
}

console.log(Person.fullName.call(person1))
console.log(Person.fullName.call(person2))