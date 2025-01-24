import { myLibrary } from '../data/library.js';
import { displayLibrary } from '../utils/domUtils.js';
import { addBookToLibrary } from '../utils/libraryUtils.js';
import { closeDialogBtn, addBookDialog } from '../src/domElements.js';
import dayjs from 'dayjs';


export function setupEventListeners() {
    const addBookBtn = document.querySelector('#addBookBtn');
    const bookForm = document.querySelector('#bookAdd');

    addBookBtn.addEventListener('click', () => {
        addBookDialog.showModal();
    });

    closeDialogBtn.addEventListener('click', () => {
        addBookDialog.close();
    });

    bookForm.addEventListener('submit', handleBookSubmit);

    document.addEventListener('click', handleReadToggle);
};

function handleBookSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const shelf = formData.get('shelf');
    const date = shelf === 'read' ? dayjs(formData.get('date')).format('MMM D, YYYY') : '';

    addBookToLibrary(title, author, pages, shelf, date);

    // clear all inputs manually
    e.target.reset();

    addBookDialog.close();
    displayLibrary(myLibrary);
};

function handleReadToggle(e) {
    if (e.target.classList.contains('read-toggle')) {
        const index = e.target.parentElement.getAttribute('data-index');
        const book = myLibrary[index];
        
        // cycle through states
        switch(book.shelf) {
            case 'tbr':
                book.shelf = 'reading';
                break;
            case 'reading':
                book.shelf = 'read';
                break;
            case 'read':
                book.shelf = 'tbr';
                break;
        }
        
        displayLibrary(myLibrary);
    };
};
