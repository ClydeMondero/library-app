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

//* Resets add book form
function resetForm(input) {
  input.value = "";
  checkBox.checked = false;
}

//* Shows the library
function showLibrary() {
  formContainer.style.display = "none";
  addBookBtn.style.display = "block";
  booksContainer.style.display = "block";
}

//*Hides add book form
function hideForm(e) {
  if (e.target.matches(".form-container")) {
    form.classList.replace("open", "close");
    form.addEventListener("animationend", showLibrary, { once: true });

    formContainer.querySelectorAll(".input").forEach((input) => {
      resetForm(input);
    });
  }
}

//* Shows add book form
function showForm() {
  formContainer.style.display = "flex";
  form.classList.replace("close", "open");
  addBookBtn.style.display = "none";
  booksContainer.style.display = "none";
}

const addBookBtn = document.querySelector(".add-book-btn");
const booksContainer = document.querySelector(".books-container");

const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const checkBox = document.querySelector(".checkbox");

addBookBtn.addEventListener("click", () => {
  showForm();
});

formContainer.addEventListener("click", (e) => {
  hideForm(e);
});

//TODO: Form Validation (required, duplicate, invalid inputs)
