// ---|| IMPORTS ||---
import { Series } from '../models/book.js';
import { shelfNames } from '../constants/shelfNames.js';
import { shelfCurrentlyReading, shelfTbr, shelfRead } from '../src/domElements.js';
import { myLibrary } from '../data/library.js';
import { removeBook } from '../utils/libraryUtils.js';


// create cardDivs
export function createBookCard(book, index) {
    const card = document.createElement('div');
    card.classList.add('book-card');
    card.setAttribute('data-index', index);
    
    let bookInfo = `
        <h3>${book.title}</h3>
    `;

    // add series information if a Series book
    if (book instanceof Series) {
        bookInfo += `<p>${book.seriesName} #${book.bookNumber}</p>`;
    } else {
        bookInfo += `<p>Series: N/A</p>`;
    }

    bookInfo += `
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Shelf: ${shelfNames[book.shelf]}</p>
        ${book.date ? `<p>Read: ${book.date}</p>` : ''}
    `;
    
    card.innerHTML = bookInfo;
    
    // create checkbox (hidden but functional)
    const cardRead = document.createElement('input');
    cardRead.type = 'checkbox';
    cardRead.name = 'read';
    cardRead.id = `card-read-${index}`;
    cardRead.style.display = 'none';

    // set checkbox state based on shelf
    switch(book.shelf) {
        case 'read':
            cardRead.checked = true;
            break;
        case 'reading':
            cardRead.classList.add('reading');
            break;
    }

    card.appendChild(cardRead);

    // create read toggle label
    const cardReadLabel = document.createElement('label');
    cardReadLabel.htmlFor = `card-read-${index}`;
    cardReadLabel.classList.add('read-toggle');

    // add the current shelf state as a class to the label (optional, for additional styling control)
    cardReadLabel.classList.add(`shelf-${book.shelf}`);

    card.appendChild(cardReadLabel);

    // create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.setAttribute('data-index', index);
    deleteBtn.onclick = () => removeBook(index); 
    card.appendChild(deleteBtn);

    return card;
};

// display library
export function displayLibrary() {
    console.log("displayLibrary called");
    console.log("Library contents:", myLibrary);

    // clear existing display/shelves
    shelfCurrentlyReading.innerHTML = '';
    shelfTbr.innerHTML = '';
    shelfRead.innerHTML = '';
    
    // sort books to correct shelves
    myLibrary.forEach((book, index) => {
        console.log("Processing book:", book);
        const card = createBookCard(book, index);
        switch(book.shelf) {
            case 'tbr':
                shelfTbr.appendChild(card);
                break;
            case 'read':
                shelfRead.appendChild(card);
                break;
            case 'reading':
                shelfCurrentlyReading.appendChild(card);
                break;
        }
    });
};

