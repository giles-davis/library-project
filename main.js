// ---|| Global Variables ||---

// ---|| Define Classes ||---
class Book {
    constructor(title, author, pages, shelf, date) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.shelf = shelf;
        this.date = date;
        this.isSeries = false;
    }
};

class Series extends Book {
    constructor(title, author, pages, shelf, date, seriesName, seriesNumber) {
        super(title, author, pages, shelf, date)
        this.isSeries = true;
        this.seriesName = seriesName;
        this.bookNumber = seriesNumber;
    }
    
    getFullTitle() {
        return `${this.seriesName} #${this.bookNumber}: ${this.title}`;
    }
};

let myLibrary = [
    new Series('Dune', 'Frank Herbert', 652, 'read', 'Jun-2022', 'Dune', 1),
    new Book('Darkome', 'Hannu Rajaniemi', 256, 'read', 'Dec-2024'),
    new Book('The Inverted World', 'Christopher Priest', 239, 'tbr', ''),
    new Book('Oceanic', 'Greg Egan', 496, 'currently-reading', ''),
    new Series('The Trials', 'Linda Nagata', 481, 'read', 'Dec-2024', 'The Red', 2),
    new Book('The Space Between Us', 'Doug Johnstone', 276, 'tbr', ''),
    new Book('Summerland', 'Hannu Rajaniemi', 320, 'tbr', ''),
    new Series('Quantum of Nightmares', 'Charles Stross', 368, 'read', 'Dec-2024', 'The Laundry Files', 11),
    new Book('A Maze of Death', 'Philip K. Dick', 192, 'tbr', ''),
    new Book('Elder Race', 'Adrian Tchaikovsky', 201, 'tbr', ''),
    new Book('Salt', 'Adam Roberts', 248, 'tbr', ''),
    new Book('The Man Who Fell to Earth', 'Walter Tevis', 209, 'tbr', ''),
    new Book('Touch', 'Claire North', 426, 'tbr', ''),
    new Series('Perdido Street Station', 'China Mieville', 710, 'tbr', '', 'New Cobuzon', 1),
    new Book('Klara and the Sun', 'Kazuo Ishiguro', 303, 'read', 'Jan-2025'),
    new Book('Bete', 'Adam Roberts', 312, 'tbr', ''),
    new Book('The Expert System\'s Brother', 'Adrian Tchaikovsky', 167, 'tbr', ''),
    new Book('The Tusks of Extinction', 'Ray Nayler', 192, 'tbr', ''),
    new Series('Escape From Yokai Land', 'Charles Stross', 81, 'read', 'Jan-2025', 'The Laundry Files', 6.5),
    new Series('Red Rising', 'Pierce Brown', 382, 'read', 'Dec-2025', 'Red Rising Saga', 1),
    new Series('Golden Son', 'Pierce Brown', 466, 'read', 'Dec-2025', 'Red Rising Saga', 2),
    new Series('Morning Star', 'Pierce Brown', 525, 'read', 'Dec-2025', 'Red Rising Saga', 3),
    new Series('Iron Gold', 'Pierce Brown', 602, 'read', 'Dec-2025', 'Red Rising Saga', 4),
    new Series('Dark Age', 'Pierce Brown', 704, 'read', 'Dec-2025', 'Red Rising Saga', 5),
    new Series('Light Bringer', 'Pierce Brown', 682, 'read', 'Dec-2025', 'Red Rising Saga', 6),
    new Series('Going Dark', 'Linda Nagata', 464, 'read', 'Dec-2025', 'The Red', 3),
    new Series('The Prefect', 'Alastair Reynolds', 410, 'tbr', '', 'Prefect Dreyfus Emergency', 1),
    new Series('Season Of Skulls', 'Charles Stross', 376, 'read', '', 'The Laundry Files', 12),
    new Book('Pushing Ice', 'Alastair Reynolds', 458, 'read', 'Jan-2025'),
    new Book('Gradisil', 'Adam Roberts', 551, 'tbr', ''),
    new Book('Salvager', 'Scott Moon', 158, 'tbr', ''),
    new Book('Nova', 'Samuel R. Delany', 241, 'tbr', ''),
    new Series('Absolution', 'Jeff VanderMeer', 441, 'tbr', '', 'Southern Reach', 4),
    new Series('Revenger', 'Alastair Reynolds', 425, 'currently-reading', 'Jan-2025', 'Revenger', 1),
    new Series('Light', 'M. John Harrison', 310, 'currently-reading', '', 'Kefahuchi Tract', 1),
    new Series('Not Till We Are Lost', 'Dennis E. Taylor', 413, 'tbr', '', 'Bobiverse', 5),
    new Series('Blindsight', 'Peter Watts', 384, 'tbr', '', 'Firefall', 1),
    new Series('The Colonel', 'Peter Watts', 29, 'tbr', '', 'Firefall', 1.5),
    new Series('Echopraxia', 'Peter Watts', 384, 'tbr', '', 'Firefall', 2),
];


document.addEventListener('DOMContentLoaded', () => {
    // ---|| DOM Elements ||---
    const shelfContainer = document.querySelector('.shelf-container');
    const shelfCurrentlyReading = document.querySelector('#currently-reading');
    const shelfTbr = document.querySelector('#tbr');
    const shelfRead = document.querySelector('#read');
    const addBookBtn = document.querySelector('#addBookBtn');
    const addBookDialog = document.querySelector('#addBookDialog');
    const bookForm = document.querySelector('#bookAdd');
    const closeDialogBtn = document.querySelector('#close');
    const resetBtn = document.querySelector('#reset');
    const confirmBtn = document.querySelector('#confirmBtn');

    // ---|| Handler Functions ||---
    function addBookToLibrary(title, author, pages, shelf, date, seriesName = null, bookNumber = null) {
        if (!myLibrary.some(book => book.title === title)) {
            const newBook = seriesName 
                ? new Series(title, author, pages, shelf, date, seriesName, bookNumber)
                : new Book(title, author, pages, shelf, date);
            myLibrary.push(newBook);
        }
        else {
            return alert('Book already shelved!')
        }
    }
    
    function removeBook(index) {
        myLibrary.splice(index, 1);
        displayLibrary();
    }

    // create cardDivs
    function createBookCard(book, index) {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-index', index);
    
        const shelfNames = {
            'currently-reading': 'Reading',
            'tbr': 'TBR',
            'read': 'Read'
        };
        
        let bookInfo = `
            <h3>${book.title}</h3>
        `;
    
        // Add series information if it's a Series book
        if (book instanceof Series) {
            bookInfo += `<p>${book.seriesName} #${book.bookNumber}</p>`;
        } else {
            bookInfo += `<p>Series: N/A</p>`;
        }
    
        bookInfo += `
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Shelf: ${shelfNames[book.shelf]}</p>
            ${book.date ? `<p>Date Read: ${book.date}</p>` : '<p>Date Read: N/A</p>'}
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
            case 'currently-reading':
                cardRead.classList.add('currently-reading');
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
    function displayLibrary() {
        // clear existing display/shelves
        shelfCurrentlyReading.innerHTML = '';
        shelfTbr.innerHTML = '';
        shelfRead.innerHTML = '';
        
        // sort books to correct shelves
        myLibrary.forEach((book, index) => {
            const card = createBookCard(book, index);
            switch(book.shelf) {
                case 'tbr':
                    shelfTbr.appendChild(card);
                    break;
                case 'read':
                    shelfRead.appendChild(card);
                    break;
                case 'currently-reading':
                    shelfCurrentlyReading.appendChild(card);
                    break;
            }
        });
    };
    

    displayLibrary();


    
    // ---|| Event Listeners ||---
    addBookBtn.addEventListener('click', () => {
        addBookDialog.showModal();
    });

    closeDialogBtn.addEventListener('click', () => {
        addBookDialog.close();
    });

    bookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // get form data
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = formData.get('pages');
        const shelf = formData.get('shelf');
        const date = shelf === 'read' ? formData.get('date') : '';
    
        addBookToLibrary(title, author, pages, shelf, date);
        
        // clear all inputs manually
        e.target.querySelectorAll('input').forEach(input => {
            if (input.type === 'radio') {
                input.checked = input.defaultChecked;
            } else {
                input.value = '';
            }
        });
        
        addBookDialog.close();
        displayLibrary();
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-toggle')) {
            const index = e.target.parentElement.getAttribute('data-index');
            const book = myLibrary[index];
            
            // cycle through states
            switch(book.shelf) {
                case 'tbr':
                    book.shelf = 'currently-reading';
                    break;
                case 'currently-reading':
                    book.shelf = 'read';
                    break;
                case 'read':
                    book.shelf = 'tbr';
                    break;
            }
            
            displayLibrary();
        }
    })
});


