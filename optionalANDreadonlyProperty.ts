type User = {
  firstName: string;
  readonly lastName: string;
  age?: number;
};

const user: User = {
  firstName: 'Rajesh',
  lastName: 'R',
};

// user["lastName"] = "error" // cannot reassign
