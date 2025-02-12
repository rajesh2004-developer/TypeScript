type Person = {
  firstName: string;
  lastName: string;
};

type User = {
  age: number;
  Experience: number;
};

type PersonUser = Person & User;

const Rajesh: PersonUser = {
  firstName: 'Rajesh',
  lastName: 'R',
  age: 20,
  Experience: 0,
};
