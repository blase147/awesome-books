import data from './appData.js';

// Mobile form Local Storage
const title = form.elements.item(0);
const author = form.elements.item(1);
function saveData() {
  const data = {
    Title: form.elements.item(0).value,
    Author: form.elements.item(1).value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('data'));
if (!formObject) {
  formObject = {
    title: '',
    author: '',
  };
  saveData();
}

title.value = formObject.title;
title.addEventListener('change', (e) => {
  formObject.title = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

author.value = formObject.author;
author.addEventListener('change', (e) => {
  formObject.author = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});


const booksDisplay = document.getElementById('books-display');

// add books
data.forEach((data) => {
    const {
      title, author,
    } = data;

    const booksBtn = project.querySelector('.add-btn');
    booksBtn.addEventListener('click', () => {
    const books = document.createElement('div');
    booksDisplay.style.display = 'flex';
    books.innerHTML +=`
    <div class="book-display-container">
        <p>${title}</p>
        <p>${author}</p>
        <hr>
        <button id="remove-btn" type="button">Remove</button>
    </div>
`;
booksDisplay.appendChild(books);
});
});
