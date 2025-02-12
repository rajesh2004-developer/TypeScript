function printValues<T, T2>(value1: T, value2: T2): [T, T2] {
  return [value1, value2];
}

console.log(printValues(1, '2'));
console.log(printValues('Rajesh', 'R'));
console.log(printValues(true, false));

function filterArray<T>(array: T[], condition: (item: T) => boolean) {
  return array.filter((item) => condition(item));
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = filterArray(array, (item) => item % 2 == 0);
console.log(result);

class Example<T> {
  private message: T;
  constructor(message: T) {
    this.message = message;
  }

  getMessage(): T {
    return this.message;
  }

  setMessage(message: T) {
    this.message = message;
  }
}

const instance = new Example('Rajesh R');
console.log(instance.getMessage());
instance.setMessage('Rajesh');
console.log(instance.getMessage());
