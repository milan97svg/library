const newBookBtn = document.querySelector('.newbookbtn')
const formContainer = document.querySelector('.formcontainer');
const cancelBtn = document.querySelector('.cancelbtn')
const submitBtn = document.querySelector('.submitbtn')
const bookContainer = document.querySelector('.bookcontainer')
const removeBtn = document.querySelector('.removebtn')
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
} 

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector('.bookcontainer');
    libraryEl.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.classList.add('book')
        bookEl.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <div class="bookbtn">
            <button class="readbtn" onclick="toggleRead(${i})">
                ${book.read ? "Read" : "Not Read"}
            </button>
            <button class="removebtn" onclick="removeBook(${i})">Remove</button>
        </div>
        `
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1)
    render();
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook)
    render();
}

newBookBtn.addEventListener('click', () => {
    formContainer.classList.remove('formdisplay')
    console.log('click');
})

cancelBtn.addEventListener('click', () => {
    event.preventDefault();
    formContainer.classList.add('formdisplay');
    title.value = '';
    author.value = ''
    pages.value = ''
    read.value = ''
    notRead.value = ''
})



submitBtn.addEventListener('click', () => {
    event.preventDefault();
    addBookToLibrary();
    // bookContainer.innerHTML += 

    // `
    // <div class="book">
    //     <h2>${titleEl.value}</h2>
    //     <p>${authorEl.value}</p>
    //     <p>${pagesEl.value}</p>
    //     <div class="bookbtn">
    //         <button class="readbtn">Read</button>
    //         <button class="removebtn">Remove</button>
    //     </div>
    // </div>`
})


