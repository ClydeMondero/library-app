//* Storage for the books
let library = [];

//* Book Protype Constructor
let i = 1;
function Book(id, title, author, page, read) {
  this.id = i;
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = "Not Read";
  this.bookInfo = function () {
    return `${title} by ${author}, ${page} pages ${read}`;
  };
}

//* Adds a book to the library array
function addBook(title, author, pages, read) {
  let book = new Book(title, author, pages, read);

  library.push(book);
  i++;
}

//*Displays every book in the library array
library.forEach((book) => {
  console.log(book.bookInfo());
});
