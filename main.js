// ---|| Global Variables ||---
let myLibrary = [
    { title: 'Dune', author: 'Frank Herbert', pages: 652, shelf: 'read', date: 'Jun-2022'},
    { title: 'Darkome', author: 'Hannu Rajaniemi', pages: 256, shelf: 'currently-reading' },
    { title: 'The Inverted World', author: 'Christopher Priest', pages: 239, shelf: 'tbr' },
    { title: 'Oceanic', author: 'Greg Egan', pages: 496, shelf: 'currently-reading' },
    { title: 'Dark Age', author: 'Pierce Brown', pages: 704, shelf: 'currently-reading' },
    { title: 'The Trials', author: 'Linda Nagata', pages: 481, shelf: 'read', date: 'Dec-2024'},
    { title: 'The Space Between Us', author: 'Doug Johnstone', pages: 276, shelf: 'tbr' },
    { title: 'Summerland', author: 'Hannu Rajaniemi', pages: 320, shelf: 'tbr' },
    { title: 'Quantum of Nightmares', author: 'Charles Stross', pages: 368, shelf: 'tbr' },
    { title: 'A Maze of Death', author: 'Philip K. Dick', pages: 192, shelf: 'tbr' },
    { title: 'Elder Race', author: 'Adrian Tchaikovsky', pages: 201, shelf: 'tbr' },
    { title: 'Salt', author: 'Adam Roberts', pages: 248, shelf: 'tbr' },
    { title: 'The Man Who Fell to Earth', author: 'Walter Tevis', pages: 209, shelf: 'tbr' },
    { title: 'Touch', author: 'Claire North', pages: 426, shelf: 'tbr' },
    { title: 'Perdido Street Station', author: 'China Mieville', pages: 710, shelf: 'tbr' },
    { title: 'Klara and the Sun', author: 'Kazuo Ishiguro', pages: 303, shelf: 'tbr' },
    { title: 'Bete', author: 'Adam Roberts', pages: 312, shelf: 'tbr' },
    { title: 'The Expert System\'s Brother', author: 'Adrian Tchaikovsky', pages: 167, shelf: 'tbr' },
    { title: 'The Tusks of Extinction', author: 'Ray Nayler', pages: 192, shelf: 'tbr' },
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
    function Book(title, author, pages, shelf, date) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.shelf = shelf;
        this.date = date
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

    function removeBook(index) {
        myLibrary.splice(index, 1);
        displayLibrary();
    }

    // create cardDivs
    function createBookCard(book, index) {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.setAttribute('data-index', index);

        // Add the main book info
        const shelfNames = {
            'currently-reading': 'Currently Reading',
            'tbr': 'TBR',
            'read': 'Read'
        };
        
        const bookInfo = `
            <h3>${book.title}</h3>
            <p>By: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Shelf: ${shelfNames[book.shelf]}</p>
            ${book.date ? `<p>Date Read: ${book.date}</p>` : ''}
        `;
        
        card.innerHTML = bookInfo;
        

        // Create checkbox (hidden but functional)
        const cardRead = document.createElement('input');
        cardRead.type = 'checkbox';
        cardRead.name = 'read';
        cardRead.id = `card-read-${index}`;
        cardRead.style.display = 'none';

        // Set checkbox state based on shelf
        switch(book.shelf) {
            case 'read':
                cardRead.checked = true;
                break;
            case 'currently-reading':
                cardRead.classList.add('currently-reading');
                break;
        }

        card.appendChild(cardRead);

        // Create read toggle label
        const cardReadLabel = document.createElement('label');
        cardReadLabel.htmlFor = `card-read-${index}`;
        cardReadLabel.classList.add('read-toggle');

        // Add the current shelf state as a class to the label (optional, for additional styling control)
        cardReadLabel.classList.add(`shelf-${book.shelf}`);

        card.appendChild(cardReadLabel);

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.setAttribute('data-index', index);
        deleteBtn.onclick = () => removeBook(index); 
        card.appendChild(deleteBtn);

        return card;
    };

    // display library
    function displayLibrary() {
        // Clear existing display/shelves
        shelfCurrentlyReading.innerHTML = '';
        shelfTbr.innerHTML = '';
        shelfRead.innerHTML = '';
        
        // Loop through library array and sort books to correct shelves
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
        
        // Get form data
        const formData = new FormData(e.target);
        const title = formData.get('title');
        const author = formData.get('author');
        const pages = formData.get('pages');
        const shelf = formData.get('shelf');
        const date = shelf === 'read' ? formData.get('date') : '';
    
        addBookToLibrary(title, author, pages, shelf, date);
        
        // Clear all inputs manually
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
            
            // Cycle through states
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


