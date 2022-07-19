/*
What is a Data Structure - are collections of values, the relationships among them and the functions or operations that can be applied to the data 
*/

/*What is a Class? - it's a blueprint for creating objects with pre defined properties and methods 

The method to create new objects must be called constructor
- the first letter of a class must be in caps


Creating Objects from classes
- we use the "new" keyword
*/

//Defining a Class
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.tardies = 0
        this.scores = []
    }
    //Instance Methods - methods that are basically provide functionality
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }
    markLate() {
        this.tardies += 1
        if(this.tardies >= 3) {
            return "You are Expelled"
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
    }
    addScore(score) {
        this.scores.push(score)
        return this.scores
    }
    calculateAvg() {
        let sum = this.scores.reduce(function(a,b) {return a+b})
        return sum/this.scores.length
    }
}
//the keyword 'this' refers to the object created from that class a.k.a Instance


//Instantiating a Class
const abhi = new Student("Abhishek", "Harish", 1996)
// console.log(abhi);



console.log(abhi.fullName())
console.log(abhi.markLate());
console.log(abhi.markLate());
console.log(abhi.markLate());
// console.log(abhi.addScore(92));
console.log(abhi.calculateAvg(10));


/*---------Class Methods------ */
// Static keyword defined a static method for a class. 
//Static methods are never used
// they are called without instantiating their class and cannot be called through a class Instance

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName
        this.lastName = lastName
        this.year = year
        this.tardies = 0
        this.scores = []
    }
    //Instance Methods - methods that are basically provide functionality
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`
    }

    static EnrollStudents() {
        return "Enrolling Students"
    }
}

