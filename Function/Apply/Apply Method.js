// It can accepts array
const Person = {
    fullName : function (){
        return this.firstName + " " + this.lastName
    }
}
const person1 ={ 
    firstName : "Akshay",
    lastName  : 'Neje' 
}
const person2 ={ 
    firstName : "Deepak",
    lastName  : 'Hebbale' 
}

console.log(Person.fullName.apply(person1))