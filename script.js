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
function render() {
    let library = document.querySelector(".library");
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let card = document.createElement("div");

        card.innerHTML = `<div class="innerCard">
                            <h3><strong>${book.title}</strong></h3>
                            <div>By <strong>${book.author}</strong></div>
                            <div># of Pages: <strong>${book.pages}</strong></div>
                            <div>Status: <strong>${book.read ? "Has Been Read" : "Not Read Yet"}</strong></div>
                          </div>
                          <div class="buttons">
                              <button onclick="removeBook(${i})" class="remove">Remove</button>
                              <button onclick="toggleRead(${i})" class="toggle">Toggle Read</button>
                          </div>`
        card.className = "card";
        library.appendChild(card);
    }
}

// Removes book 
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

// Toggles the read status for a certain book
function toggleRead(index) {
    myLibrary[index].read = !(myLibrary[index].read);
    render();
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

// Clears all input after submit or cancel button is clicked 
function clearInput() {
    document.querySelectorAll("input").forEach((element) => {
        if (element.getAttribute("type") != "checkbox") {
            element.value = "";
        }
        else {
            element.checked = false;
        }
    })
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
    clearInput();
})

// Submit button calls the addBookToLibrary function
const form = document.querySelector("#bookForm");
form.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
    clearInput();
})

