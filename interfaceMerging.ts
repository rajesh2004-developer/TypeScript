interface Book {
  Bname: string;
  Read(): void;
}

interface Book {
  Author: string;
  Close(): void;
}

const book: Book = {
  Bname: 'Book',
  Author: 'Author',
  Read() {
    return 'Reading...';
  },
  Close() {
    return 'closed';
  },
};

console.log(book);
