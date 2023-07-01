// //* Storage for the books
// let library = [];

// //* Book Protype Constructor
// let i = 1;
// function Book(id, title, author, page, read) {
//   this.id = i;
//   this.title = title;
//   this.author = author;
//   this.page = page;
//   this.read = "Not Read";
//   this.bookInfo = function () {
//     return `${title} by ${author}, ${page} pages ${read}`;
//   };
// }

// //* Adds a book to the library array
// function addBook(title, author, pages, read) {
//   let book = new Book(title, author, pages, read);

//   library.push(book);
//   i++;
// }

// //*Displays every book in the library array
// library.forEach((book) => {
//   console.log(book.bookInfo());
// });

//* Shows/Hides Add Book Form
const addBookBtn = document.querySelector(".add-book-btn");
const formContainer = document.querySelector(".form-container");

addBookBtn.addEventListener("click", () => {
  formContainer.style.display = "flex";
  addBookBtn.style.display = "none";
});

formContainer.addEventListener("click", (e) => {
  if (e.target.matches(".form-container")) {
    formContainer.style.display = "none";
    addBookBtn.style.display = "block";

    //*Clears the input fields
    formContainer.querySelectorAll(".input").forEach((input) => {
      input.value = "";
    });
  }
});

//TODO: Form Validation (required, duplicate, invalid inputs)
