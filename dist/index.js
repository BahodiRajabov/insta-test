"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(Person.prototype);
class Student extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
    takeExam() {
        return "Taking exam";
    }
}
const bahodir = new Student("bahodir", "rajabov");
console.log(bahodir);
console.log(typeof Person);
console.log(Student.prototype);
//# sourceMappingURL=index.js.map