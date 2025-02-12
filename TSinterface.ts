interface Computer {
  Cname: string;
  id: number;
  ram: number;
}

const obj: Computer = {
  Cname: 'Hp',
  id: 1,
  ram: 8,
};

console.log(obj);

interface operations {
  (x: number, y: number): number;
}

const add: operations = (x, y) => x + y;
const substract: operations = (x, y) => x - y;
const multiply: operations = (x, y) => x * y;

console.log(add(2, 2));
console.log(substract(10, 5));
console.log(multiply(5, 5));

interface CarFunc {
  start(): void;
  stop(): void;
  car_name: string;
}

class Car implements CarFunc {
  car_name = 'Ford';
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
