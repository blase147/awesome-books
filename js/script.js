const bookDisplay = document.getElementById('bookDisplay');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('author-name');
const bookAdd = document.getElementById('add-btn');
class Booklibrary {
  constructor() {
    this.books = [
      {
        title: 'Ghost',
        author: 'Sidney Sheldon',
      },
      {
        title: 'The Naked Face',
        author: 'Sidney Sheldon',
      },
    ];
  }
  // add books
  addBook(title, author) {
    this.books.push({
      title,
      author,
    });
    bookAuthor.value = '';
    bookTitle.value = '';
    this.setLocalStorage();
    this.displayBooks();
  }
  removeBook(index) {
    this.books.splice(index, 1);
    this.setLocalStorage();
    this.displayBooks();
  }
  setLocalStorage() {
    localStorage.setItem('localLibraries', JSON.stringify(this.books));
  }
  getLocalStorage() {
    if (localStorage.getItem('localLibraries')) {
      this.books = JSON.parse(localStorage.getItem('localLibraries'));
    }
    this.displayBooks();
  }
  displayBooks() {
    bookDisplay.innerHTML = '';
    this.books.forEach((book, index) => {
      const h3 = document.createElement('div');
      h3.classList.add('book-div');
      const bookAuthors = document.createElement('p');
      const bookNames = document.createElement('p');
      const removeBtn = document.createElement('button');
      bookAuthors.textContent = ` ${book.title}`;
      bookNames.textContent = ` ${book.author}`;
      removeBtn.textContent = 'remove';
      removeBtn.classList.add('remove');
      h3.append(bookAuthors, bookNames, removeBtn);
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
      });
      bookDisplay.appendChild(h3);
      const line = document.createElement('hr');
      line.className = 'remove';
      h3.appendChild(line);
    });
  }
}
const allLibrary = new Booklibrary();
bookAdd.addEventListener('click', (e) => {
  e.preventDefault();
  allLibrary.addBook(bookTitle.value, bookAuthor.value);
});
document.addEventListener('DOMContentLoaded', () => {
  allLibrary.getLocalStorage();
});