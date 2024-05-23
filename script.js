const modal = document.getElementById("modal");
const confirm = document.getElementById("confirm");
const addButton = document.getElementById("addButton");
const cancel = document.querySelector(".cancel");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
console.log(myLibrary[0].title);

addButton.addEventListener("click", () => {
    modal.showModal();
})

cancel.addEventListener("click", () => {
    modal.close();
})