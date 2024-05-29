// Initialize library array to store Book objects
const myLibrary = [];

// Function used to create Book objects
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Render function creates cards when called
let i = 0
function render() {
    let library = document.querySelector(".library");
    let book = myLibrary[i];
    let card = document.createElement("div");
    let cardRead;

    if (book.read == true) {
        cardRead = "Has Been Read"
    }
    else {
        cardRead = "Not Read Yet"
    }

    card.innerHTML = `<div class="innerCard">
                            <strong>${book.title}</strong>
                            <div>By <strong>${book.author}</strong></div>
                            <div># of Pages: <strong>${book.pages}</strong></div>
                            <div>Status: <strong>${cardRead}</strong></div>
                        </div>
                        <div class="remove">Remove</div>`

    card.className = "card";
    library.appendChild(card);
    i += 1;
}

// Adds Book objects to the library array 
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;

    const book = new Book(title, author, pages, read);
    console.log(book);
    myLibrary.push(book);
    render();
}

// Modal pops up when add book button is clicked
const modal = document.getElementById("modal");
const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => {
    modal.showModal();
})

// Modal is closed when the x button is clicked 
const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    modal.close();
})

// Submit button calls the addBookToLibrary function
const form = document.querySelector("#bookForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
})
