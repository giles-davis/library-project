// ---|| IMPORTS ||---
import { Book, Series } from '../models/book.js';
import { myLibrary } from '../data/library.js';
import { displayLibrary } from '../utils/domUtils.js';

// ---|| Library Handler Functions ||---
export function addBookToLibrary(title, author, pages, shelf, date, seriesName = null, bookNumber = null) {
    if (!myLibrary.some(book => book.title === title)) {
        const newBook = seriesName 
            ? new Series(title, author, pages, shelf, date, seriesName, bookNumber)
            : new Book(title, author, pages, shelf, date);
        myLibrary.push(newBook);
    }
    else {
        return alert('Book already shelved!')
    }
};

export function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
};