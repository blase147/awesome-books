// Adding books to library
const booksDisplay = document.querySelector('#books-display');
const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#author-name');
const addBook = document.querySelector('#add-btn');
addBook.addEventListener("click", function(){
    if(titleInput.value == "" && authorInput.value == ""){
        alert("Kindly fill in the inputs");
    }else{
            const books = document.createElement('div');
            const newTitle = document.createElement('h');
            newTitle.innerHTML = titleInput.value;
            books.appendChild(newTitle);
            const newAuthor = document.createElement('p');
            newAuthor.innerHTML = authorInput.value;
            books.appendChild(newAuthor);
            booksDisplay.appendChild(books);
    }
});
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
