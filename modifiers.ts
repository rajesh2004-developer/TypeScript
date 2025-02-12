class Person {
  public first: string;
  public last: string;
  private age: number;
  protected Gender: string;

  constructor(first: string, last: string, age: number, Gender: string) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.Gender = Gender;
  }
}

const Rajesh = new Person('Rajesh', 'R', 20, 'M');

console.log(Rajesh.first);
console.log(Rajesh.last);
