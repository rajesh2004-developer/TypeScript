"use strict";
const obj = {
    Cname: 'Hp',
    id: 1,
    ram: 8,
};
console.log(obj);
const add = (x, y) => x + y;
const substract = (x, y) => x - y;
const multiply = (x, y) => x * y;
console.log(add(2, 2));
console.log(substract(10, 5));
console.log(multiply(5, 5));
class Car {
    constructor() {
        this.car_name = 'Ford';
    }
    start() {
        return 'Car is starting..';
    }
    stop() {
        return 'Car is stopped';
    }
}
const car = new Car();
console.log(car.start());
console.log(car.stop());
