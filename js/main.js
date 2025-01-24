// ---|| IMPORTS ||---
import { myLibrary } from './data/library.js';
import { displayLibrary } from './utils/domUtils.js';
import { setupEventListeners } from './eventHandlers/bookHandlers.js';
import dayjs from 'dayjs';



// ---|| MAIN CODE ||---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    displayLibrary(myLibrary);
    
    // Set up event listeners
    setupEventListeners();
});