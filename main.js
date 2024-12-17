// ---|| Global Variables ||---
const myLibrary = [];

// ---|| DOM Elements ||---
const shelfContainer = document.querySelector('.shelf-container');
const shelfTbr = document.querySelector('#tbr')
const shelfRead = document.querySelector('#read')
const addBookBtn = document.querySelector('#addBookBtn');
const addBookDialog = document.querySelector('#addBookDialog');
const bookForm = document.querySelector('#bookAdd');
const closeDialogBtn = document.querySelector('#close');
const resetBtn = document.querySelector('#reset');
const confirmBtn = document.querySelector('#confirmBtn');

// ---|| Handler Functions ||---
function Book(title, author, pages, shelf, date) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.shelf = shelf;
    this.date = date
    this.sayBook = function() {
        return `${title}, ${author}, ${pages}, ${shelf}`;
    }
};

function addBookToLibrary(title, author, pages, shelf, date) {
    if (!myLibrary.some(book => book.title === title)) {
        const newBook = new Book(title, author, pages, shelf, date);
        myLibrary.push(newBook);
    }
    else {
        return alert('Book already shelved!')
    }
}

addBookToLibrary('Superintelligence: Paths, Dangers, Strategies', 'Nick Bostrom', 352, 'Read', 'Feb-2020');

// ---|| Event Listeners ||---
addBookBtn.addEventListener('click', () => {
    addBookDialog.showModal();
});

closeDialogBtn.addEventListener('click', () => {
    addBookDialog.close();
});

bookForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent actual form submission
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const shelf = document.querySelector('input[name="shelf"]:checked').value;
    const date = shelf === 'read' ? document.querySelector('#date').value : ''; 

    addBookToLibrary(title, author, pages, shelf, date);
    
    bookForm.reset();
    addBookDialog.close();
});

resetBtn.addEventListener('click', () => {
    bookForm.reset();
});