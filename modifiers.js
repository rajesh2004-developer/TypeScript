"use strict";
class Person {
    constructor(first, last, age, Gender) {
        this.first = first;
        this.last = last;
        this.age = age;
        this.Gender = Gender;
    }
}
const Rajesh = new Person('Rajesh', 'R', 20, 'M');
console.log(Rajesh.first);
console.log(Rajesh.last);
