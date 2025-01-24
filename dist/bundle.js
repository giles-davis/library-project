/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/constants/shelfNames.js":
/*!************************************!*\
  !*** ./js/constants/shelfNames.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shelfNames: () => (/* binding */ shelfNames)\n/* harmony export */ });\nconst shelfNames = {\n    'reading': 'Reading',\n    'tbr': 'TBR',\n    'read': 'Read'\n};\n\n//# sourceURL=webpack://library-project/./js/constants/shelfNames.js?");

/***/ }),

/***/ "./js/data/library.js":
/*!****************************!*\
  !*** ./js/data/library.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   myLibrary: () => (/* binding */ myLibrary)\n/* harmony export */ });\n/* harmony import */ var _models_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/book.js */ \"./js/models/book.js\");\n// ---|| IMPORTS ||---\n\n\n// ---|| Library Variables ||---\nlet myLibrary = [\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Dune', 'Frank Herbert', 652, 'read', 'Jun 1, 2022', 'Dune', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Darkome', 'Hannu Rajaniemi', 256, 'read', 'Dec 19, 2024'),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Inverted World', 'Christopher Priest', 239, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Oceanic', 'Greg Egan', 496, 'reading', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('The Trials', 'Linda Nagata', 481, 'read', 'Dec 16, 2024', 'The Red', 2),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Space Between Us', 'Doug Johnstone', 276, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Summerland', 'Hannu Rajaniemi', 320, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Quantum of Nightmares', 'Charles Stross', 368, 'read', 'Dec 22, 2024', 'The Laundry Files', 11),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('A Maze of Death', 'Philip K. Dick', 192, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Elder Race', 'Adrian Tchaikovsky', 201, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Salt', 'Adam Roberts', 248, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Man Who Fell to Earth', 'Walter Tevis', 209, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Touch', 'Claire North', 426, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Perdido Street Station', 'China Mieville', 710, 'tbr', '', 'New Cobuzon', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Klara and the Sun', 'Kazuo Ishiguro', 303, 'read', 'Jan 6, 2025'),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Bete', 'Adam Roberts', 312, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Expert System\\'s Brother', 'Adrian Tchaikovsky', 167, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Tusks of Extinction', 'Ray Nayler', 192, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Escape From Yokai Land', 'Charles Stross', 81, 'read', 'Jan 1, 2025', 'The Laundry Files', 6.5),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Red Rising', 'Pierce Brown', 382, 'read', 'Dec 5, 2025', 'Red Rising Saga', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Golden Son', 'Pierce Brown', 466, 'read', 'Dec 7, 2025', 'Red Rising Saga', 2),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Morning Star', 'Pierce Brown', 525, 'read', 'Dec 10, 2025', 'Red Rising Saga', 3),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Iron Gold', 'Pierce Brown', 602, 'read', 'Dec 14, 2025', 'Red Rising Saga', 4),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Dark Age', 'Pierce Brown', 704, 'read', 'Dec 23, 2025', 'Red Rising Saga', 5),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Light Bringer', 'Pierce Brown', 682, 'read', 'Jan 2, 2025', 'Red Rising Saga', 6),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Going Dark', 'Linda Nagata', 464, 'read', 'Dec 28, 2024', 'The Red', 3),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('The Prefect', 'Alastair Reynolds', 410, 'tbr', '', 'Prefect Dreyfus Emergency', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Season Of Skulls', 'Charles Stross', 376, 'read', 'Jan 9, 2025', 'The Laundry Files', 12),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Pushing Ice', 'Alastair Reynolds', 458, 'read', 'Jan 3, 2025'),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Gradisil', 'Adam Roberts', 551, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Salvager', 'Scott Moon', 158, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('Nova', 'Samuel R. Delany', 241, 'tbr', ''),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Absolution', 'Jeff VanderMeer', 441, 'tbr', '', 'Southern Reach', 4),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Revenger', 'Alastair Reynolds', 425, 'read', 'Jan 9, 2025', 'Revenger', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Shadow Captain', 'Alastair Reynolds', 426, 'read', 'Jan 12, 2025', 'Revenger', 2),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Bone Silence', 'Alastair Reynolds', 603, 'read', 'Jan 17, 2025', 'Revenger', 3),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Light', 'M. John Harrison', 310, 'read', 'Jan 25, 2025', 'Kefahuchi Tract', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Not Till We Are Lost', 'Dennis E. Taylor', 413, 'tbr', '', 'Bobiverse', 5),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Blindsight', 'Peter Watts', 384, 'tbr', '', 'Firefall', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('The Colonel', 'Peter Watts', 29, 'tbr', '', 'Firefall', 1.5),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Echopraxia', 'Peter Watts', 384, 'tbr', '', 'Firefall', 2),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Wool', 'Hugh Howey', 509, 'read', 'Jan 20, 2025', 'Silo', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book('The Medusa Chronicles', 'Alastair Reynolds, Stephen Baxter', 326, 'read', 'Jan 21, 2025'),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Beyond the Hallowed Sky', 'Ken MacLeod', 320, 'read', 'Jan 22, 2025', 'Lightspeed', 1),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Beyond the Reach of Earth', 'Ken MacLeod', 368, 'read', 'Jan 22, 2025', 'Lightspeed', 2),\n    new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series('Beyond the Light Horizon', 'Ken MacLeod', 380, 'reading', '', 'Lightspeed', 3),\n];\n\n//# sourceURL=webpack://library-project/./js/data/library.js?");

/***/ }),

/***/ "./js/eventHandlers/bookHandlers.js":
/*!******************************************!*\
  !*** ./js/eventHandlers/bookHandlers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupEventListeners: () => (/* binding */ setupEventListeners)\n/* harmony export */ });\n/* harmony import */ var _data_library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/library.js */ \"./js/data/library.js\");\n/* harmony import */ var _utils_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/domUtils.js */ \"./js/utils/domUtils.js\");\n/* harmony import */ var _utils_libraryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/libraryUtils.js */ \"./js/utils/libraryUtils.js\");\n/* harmony import */ var _src_domElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/domElements.js */ \"./js/src/domElements.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nfunction setupEventListeners() {\n    const addBookBtn = document.querySelector('#addBookBtn');\n    const bookForm = document.querySelector('#bookAdd');\n\n    addBookBtn.addEventListener('click', () => {\n        _src_domElements_js__WEBPACK_IMPORTED_MODULE_3__.addBookDialog.showModal();\n    });\n\n    _src_domElements_js__WEBPACK_IMPORTED_MODULE_3__.closeDialogBtn.addEventListener('click', () => {\n        _src_domElements_js__WEBPACK_IMPORTED_MODULE_3__.addBookDialog.close();\n    });\n\n    bookForm.addEventListener('submit', handleBookSubmit);\n\n    document.addEventListener('click', handleReadToggle);\n};\n\nfunction handleBookSubmit(e) {\n    e.preventDefault();\n\n    const formData = new FormData(e.target);\n    const title = formData.get('title');\n    const author = formData.get('author');\n    const pages = formData.get('pages');\n    const shelf = formData.get('shelf');\n    const date = shelf === 'read' ? dayjs__WEBPACK_IMPORTED_MODULE_4___default()(formData.get('date')).format('MMM D, YYYY') : '';\n\n    (0,_utils_libraryUtils_js__WEBPACK_IMPORTED_MODULE_2__.addBookToLibrary)(title, author, pages, shelf, date);\n\n    // clear all inputs manually\n    e.target.reset();\n\n    _src_domElements_js__WEBPACK_IMPORTED_MODULE_3__.addBookDialog.close();\n    (0,_utils_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary)(_data_library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary);\n};\n\nfunction handleReadToggle(e) {\n    if (e.target.classList.contains('read-toggle')) {\n        const index = e.target.parentElement.getAttribute('data-index');\n        const book = _data_library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary[index];\n        \n        // cycle through states\n        switch(book.shelf) {\n            case 'tbr':\n                book.shelf = 'reading';\n                break;\n            case 'reading':\n                book.shelf = 'read';\n                break;\n            case 'read':\n                book.shelf = 'tbr';\n                break;\n        }\n        \n        (0,_utils_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary)(_data_library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary);\n    };\n};\n\n\n//# sourceURL=webpack://library-project/./js/eventHandlers/bookHandlers.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_library_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/library.js */ \"./js/data/library.js\");\n/* harmony import */ var _utils_domUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/domUtils.js */ \"./js/utils/domUtils.js\");\n/* harmony import */ var _eventHandlers_bookHandlers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventHandlers/bookHandlers.js */ \"./js/eventHandlers/bookHandlers.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);\n// ---|| IMPORTS ||---\n\n\n\n\n\n\n\n// ---|| MAIN CODE ||---\ndocument.addEventListener('DOMContentLoaded', () => {\n    // Initialize the application\n    (0,_utils_domUtils_js__WEBPACK_IMPORTED_MODULE_1__.displayLibrary)(_data_library_js__WEBPACK_IMPORTED_MODULE_0__.myLibrary);\n    \n    // Set up event listeners\n    (0,_eventHandlers_bookHandlers_js__WEBPACK_IMPORTED_MODULE_2__.setupEventListeners)();\n});\n\n//# sourceURL=webpack://library-project/./js/main.js?");

/***/ }),

/***/ "./js/models/book.js":
/*!***************************!*\
  !*** ./js/models/book.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book),\n/* harmony export */   Series: () => (/* binding */ Series)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n// ---|| IMPORTS ||---\n\n\n\n// ---|| Define Classes ||---\nclass Book {\n    constructor(title, author, pages, shelf, date) {\n        this.title = title;\n        this.author = author;\n        this.pages = pages;\n        this.shelf = shelf;\n        this.date = date ? dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format('MMM D, YYYY') : null;\n        this.isSeries = false;\n    }\n};\n\nclass Series extends Book {\n    constructor(title, author, pages, shelf, date, seriesName, seriesNumber) {\n        super(title, author, pages, shelf, date)\n        this.isSeries = true;\n        this.seriesName = seriesName;\n        this.bookNumber = seriesNumber;\n    }\n    \n    getFullTitle() {\n        return `${this.seriesName} #${this.bookNumber}: ${this.title}`;\n    }\n};\n\n\n//# sourceURL=webpack://library-project/./js/models/book.js?");

/***/ }),

/***/ "./js/src/domElements.js":
/*!*******************************!*\
  !*** ./js/src/domElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBookDialog: () => (/* binding */ addBookDialog),\n/* harmony export */   closeDialogBtn: () => (/* binding */ closeDialogBtn),\n/* harmony export */   confirmBtn: () => (/* binding */ confirmBtn),\n/* harmony export */   resetBtn: () => (/* binding */ resetBtn),\n/* harmony export */   shelfContainer: () => (/* binding */ shelfContainer),\n/* harmony export */   shelfCurrentlyReading: () => (/* binding */ shelfCurrentlyReading),\n/* harmony export */   shelfRead: () => (/* binding */ shelfRead),\n/* harmony export */   shelfTbr: () => (/* binding */ shelfTbr)\n/* harmony export */ });\n// ---|| DOM Elements ||---\nconst shelfContainer = document.querySelector('.shelf-container');\nconst shelfCurrentlyReading = document.querySelector('#reading');\nconst shelfTbr = document.querySelector('#tbr');\nconst shelfRead = document.querySelector('#read');\nconst closeDialogBtn = document.querySelector('#close');\nconst resetBtn = document.querySelector('#reset');\nconst confirmBtn = document.querySelector('#confirmBtn');\nconst addBookDialog = document.querySelector('#addBookDialog');\n\n//# sourceURL=webpack://library-project/./js/src/domElements.js?");

/***/ }),

/***/ "./js/utils/domUtils.js":
/*!******************************!*\
  !*** ./js/utils/domUtils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBookCard: () => (/* binding */ createBookCard),\n/* harmony export */   displayLibrary: () => (/* binding */ displayLibrary)\n/* harmony export */ });\n/* harmony import */ var _models_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/book.js */ \"./js/models/book.js\");\n/* harmony import */ var _constants_shelfNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/shelfNames.js */ \"./js/constants/shelfNames.js\");\n/* harmony import */ var _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/domElements.js */ \"./js/src/domElements.js\");\n/* harmony import */ var _data_library_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/library.js */ \"./js/data/library.js\");\n/* harmony import */ var _utils_libraryUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/libraryUtils.js */ \"./js/utils/libraryUtils.js\");\n// ---|| IMPORTS ||---\n\n\n\n\n\n\n\n// create cardDivs\nfunction createBookCard(book, index) {\n    const card = document.createElement('div');\n    card.classList.add('book-card');\n    card.setAttribute('data-index', index);\n    \n    let bookInfo = `\n        <h3>${book.title}</h3>\n    `;\n\n    // add series information if a Series book\n    if (book instanceof _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series) {\n        bookInfo += `<p>${book.seriesName} #${book.bookNumber}</p>`;\n    } else {\n        bookInfo += '';\n    }\n\n    bookInfo += `\n        <p>Author: ${book.author}</p>\n        <p>Pages: ${book.pages}</p>\n        ${book.date ? `<p>Read: ${book.date}</p>` : ''}\n    `;\n    \n    card.innerHTML = bookInfo;\n    \n    // create checkbox (hidden but functional)\n    const cardRead = document.createElement('input');\n    cardRead.type = 'checkbox';\n    cardRead.name = 'read';\n    cardRead.id = `card-read-${index}`;\n    cardRead.style.display = 'none';\n\n    // set checkbox state based on shelf\n    switch(book.shelf) {\n        case 'read':\n            cardRead.checked = true;\n            break;\n        case 'reading':\n            cardRead.classList.add('reading');\n            break;\n    }\n\n    card.appendChild(cardRead);\n\n    // create read toggle label\n    const cardReadLabel = document.createElement('label');\n    cardReadLabel.htmlFor = `card-read-${index}`;\n    cardReadLabel.classList.add('read-toggle');\n\n    // add the current shelf state as a class to the label (optional, for additional styling control)\n    cardReadLabel.classList.add(`shelf-${book.shelf}`);\n\n    card.appendChild(cardReadLabel);\n\n    // create delete button\n    const deleteBtn = document.createElement('button');\n    deleteBtn.classList.add('deleteBtn');\n    deleteBtn.setAttribute('data-index', index);\n    deleteBtn.onclick = () => (0,_utils_libraryUtils_js__WEBPACK_IMPORTED_MODULE_4__.removeBook)(index); \n    card.appendChild(deleteBtn);\n\n    return card;\n};\n\n// display library\nfunction displayLibrary() {\n    console.log(\"displayLibrary called\");\n    console.log(\"Library contents:\", _data_library_js__WEBPACK_IMPORTED_MODULE_3__.myLibrary);\n\n    // clear existing display/shelves\n    _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfCurrentlyReading.innerHTML = '';\n    _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfTbr.innerHTML = '';\n    _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfRead.innerHTML = '';\n    \n    // sort books to correct shelves\n    _data_library_js__WEBPACK_IMPORTED_MODULE_3__.myLibrary.forEach((book, index) => {\n        console.log(\"Processing book:\", book);\n        const card = createBookCard(book, index);\n        switch(book.shelf) {\n            case 'tbr':\n                _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfTbr.appendChild(card);\n                break;\n            case 'read':\n                _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfRead.appendChild(card);\n                break;\n            case 'reading':\n                _src_domElements_js__WEBPACK_IMPORTED_MODULE_2__.shelfCurrentlyReading.appendChild(card);\n                break;\n        }\n    });\n};\n\n\n\n//# sourceURL=webpack://library-project/./js/utils/domUtils.js?");

/***/ }),

/***/ "./js/utils/libraryUtils.js":
/*!**********************************!*\
  !*** ./js/utils/libraryUtils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBookToLibrary: () => (/* binding */ addBookToLibrary),\n/* harmony export */   removeBook: () => (/* binding */ removeBook)\n/* harmony export */ });\n/* harmony import */ var _models_book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/book.js */ \"./js/models/book.js\");\n/* harmony import */ var _data_library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/library.js */ \"./js/data/library.js\");\n/* harmony import */ var _utils_domUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/domUtils.js */ \"./js/utils/domUtils.js\");\n// ---|| IMPORTS ||---\n\n\n\n\n// ---|| Library Handler Functions ||---\nfunction addBookToLibrary(title, author, pages, shelf, date, seriesName = null, bookNumber = null) {\n    if (!_data_library_js__WEBPACK_IMPORTED_MODULE_1__.myLibrary.some(book => book.title === title)) {\n        const newBook = seriesName \n            ? new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Series(title, author, pages, shelf, date, seriesName, bookNumber)\n            : new _models_book_js__WEBPACK_IMPORTED_MODULE_0__.Book(title, author, pages, shelf, date);\n        _data_library_js__WEBPACK_IMPORTED_MODULE_1__.myLibrary.push(newBook);\n    }\n    else {\n        return alert('Book already shelved!')\n    }\n};\n\nfunction removeBook(index) {\n    _data_library_js__WEBPACK_IMPORTED_MODULE_1__.myLibrary.splice(index, 1);\n    (0,_utils_domUtils_js__WEBPACK_IMPORTED_MODULE_2__.displayLibrary)();\n};\n\n//# sourceURL=webpack://library-project/./js/utils/libraryUtils.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,(function(){\"use strict\";var t=1e3,e=6e4,n=36e5,r=\"millisecond\",i=\"second\",s=\"minute\",u=\"hour\",a=\"day\",o=\"week\",c=\"month\",f=\"quarter\",h=\"year\",d=\"date\",l=\"Invalid Date\",$=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[Tt\\s]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,y=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\"),ordinal:function(t){var e=[\"th\",\"st\",\"nd\",\"rd\"],n=t%100;return\"[\"+t+(e[(n-20)%10]||e[n]||e[0])+\"]\"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+m(r,2,\"0\")+\":\"+m(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},g=\"en\",D={};D[g]=M;var p=\"$isDayjsObject\",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if(\"string\"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split(\"-\");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate(\"s\"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v=\"set\"+(this.$u?\"UTC\":\"\");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+\"Hours\",0);case u:return $(v+\"Minutes\",1);case s:return $(v+\"Seconds\",2);case i:return $(v+\"Milliseconds\",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f=\"set\"+(this.$u?\"UTC\":\"\"),l=(n={},n[a]=f+\"Date\",n[d]=f+\"Date\",n[c]=f+\"Month\",n[h]=f+\"FullYear\",n[u]=f+\"Hours\",n[s]=f+\"Minutes\",n[i]=f+\"Seconds\",n[r]=f+\"Milliseconds\",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||\"YYYY-MM-DDTHH:mm:ssZ\",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,\"0\")},$=f||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return b.s(e.$y,4,\"0\");case\"M\":return a+1;case\"MM\":return b.s(a+1,2,\"0\");case\"MMM\":return h(n.monthsShort,a,c,3);case\"MMMM\":return h(c,a);case\"D\":return e.$D;case\"DD\":return b.s(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return h(n.weekdaysMin,e.$W,o,2);case\"ddd\":return h(n.weekdaysShort,e.$W,o,3);case\"dddd\":return o[e.$W];case\"H\":return String(s);case\"HH\":return b.s(s,2,\"0\");case\"h\":return d(1);case\"hh\":return d(2);case\"a\":return $(s,u,!0);case\"A\":return $(s,u,!1);case\"m\":return String(u);case\"mm\":return b.s(u,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return b.s(e.$s,2,\"0\");case\"SSS\":return b.s(e.$ms,3,\"0\");case\"Z\":return i}return null}(t)||i.replace(\":\",\"\")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[[\"$ms\",r],[\"$s\",i],[\"$m\",s],[\"$H\",u],[\"$W\",a],[\"$M\",c],[\"$y\",h],[\"$D\",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));\n\n//# sourceURL=webpack://library-project/./node_modules/dayjs/dayjs.min.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;