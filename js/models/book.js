// ---|| IMPORTS ||---
import '../../lib/dayjs/dayjs.min.js';
const dayjs = window.dayjs;


// ---|| Define Classes ||---
export class Book {
    constructor(title, author, pages, shelf, date) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.shelf = shelf;
        this.date = date ? dayjs(date).format('MMM D, YYYY') : null;
        this.isSeries = false;
    }
};

export class Series extends Book {
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
