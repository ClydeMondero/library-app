//* Storage for the books
let library = [];
let i = 0;

//* Book Prototype Constructor
function Book(id, title, author, pages, read) {
  this.id = i;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.bookInfo = () => {
    console.log(`${title} by ${author}, ${pages} pages ${read}`);
  };
}

//* Adds a book to the library array
function addBook(title, author, pages, read) {
  let book = new Book(i, title, author, pages, read);

  library.push(book);
  i++;
}

//* Displays every book in the library array
function displayBooks() {
  booksContainer.replaceChildren();
  library.forEach((book) => {
    book.bookInfo();

    const bookContainer = document.createElement("div");
    bookContainer.classList.add("book");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");
    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove");

    bookContainer.appendChild(title).textContent = `Title: ${book.title}`;
    bookContainer.appendChild(author).textContent = `Author: ${book.author}`;
    bookContainer.appendChild(
      pages
    ).textContent = `Number of pages: ${book.pages}`;

    if (book.read) {
      bookContainer.appendChild(read).textContent = "Read";
      read.classList.add("read");
    } else {
      bookContainer.appendChild(read).textContent = "Not Read";
      read.classList.add("not-read");
    }

    bookContainer.appendChild(removeBtn).textContent = "Remove";

    booksContainer.appendChild(bookContainer);

    removeBtn.addEventListener("click", () => {
      library.splice(book.id, 1);
      displayBooks();
    });
  });
}

//* Resets add book form
function resetForm(input) {
  input.value = "";
  checkBox.checked = false;
}

//* Shows the library
function showLibrary() {}

//*Hides add book form
function hideForm() {
  form.classList.replace("open", "close");
  form.addEventListener(
    "animationend",
    () => (formContainer.style.display = "none"),
    { once: true }
  );

  formContainer.querySelectorAll(".input").forEach((input) => {
    resetForm(input);
  });
}

//* Shows add book form
function showForm() {
  formContainer.style.display = "flex";
  form.classList.replace("close", "open");
}

const addBookBtn = document.querySelector(".add-book-btn");
const booksContainer = document.querySelector(".books-container");

const formContainer = document.querySelector(".form-container");
const form = document.querySelector(".form");
const checkBox = document.querySelector(".checkbox");
const addBtn = document.querySelector(".button");

displayBooks();

addBookBtn.addEventListener("click", () => {
  showForm();

  form.addEventListener("submit", (e) => e.preventDefault());

  addBtn.addEventListener("click", () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#readStatus").checked;

    addBook(title, author, pages, read);
    hideForm();
    displayBooks();
  });
});

formContainer.addEventListener("click", (e) => {
  if (e.target.matches(".form-container")) {
    hideForm();
  }
});

//TODO: Form Validation (required, duplicate, invalid inputs)
