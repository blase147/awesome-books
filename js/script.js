import data from './appData.js';

const booksDisplay = document.getElementById('books-display');
const addBook = document.getElementById('add-btn');
const addTitle = document.getElementById('title');
const addAuthor = document.getElementById('author');
const removeBook = document.getElementById('remove-btn');

data.forEach((data) => {
    const {
      title, author,
    } = data;

    // const addbtn = books.querySelector('#add-btn');
    // addbtn.addEventListener('click', () => {

    const books = document.createElement('div');
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
// });


// const form = document.querySelector('#awesome-form');
// const messageContainer = document.querySelector('.message');

// const isValidEmail = (email) => {
//   const emailPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
//   return emailPattern.test(email);
// };

// form.addEventListener('submit', (e) => {
//   const formData = new FormData(e.target);
//   const valid = isValidEmail(formData.get('email'));
//   if (valid) {
//     const message = document.createElement('span');
//     message.classList.add('success');
//     message.innerHTML = 'Data sent successfully!';
//     messageContainer.replaceChildren(message);
//   } else {
//     e.preventDefault();
//     const message = document.createElement('span');
//     message.classList.add('error');
//     message.innerHTML = 'Incorrect format. Enter email in lowercase';
//     messageContainer.replaceChildren(message);
//   }
// });

// Mobile form Local Storage
const title = form.item(0);
const author = form.item(1);
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

