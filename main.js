const myLibrary = [];

function Book(title, author, pages, shelf) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.shelf = shelf;
    this.sayBook = function() {
        return `${title}, ${author}, ${pages}, ${shelf}`;
    }
};

function addBookToLibrary() {
    
}
const dune = new Book('Dune', 'Frank Herbert', 658, 'Read')

console.log(dune.sayBook());

Object.getPrototypeOf(dune) === Book.prototype;