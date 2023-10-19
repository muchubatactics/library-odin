let myLibrary = [];
let bookGrid = document.querySelector(".lib-grid");

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.isRead = isRead;
    this.isDisplayed = false;
}

Book.prototype.info = function(){
    let str = `${this.title} by ${this.author}, ${this.numberOfPages} pages, `;
    if (this.isRead) str += "already read.";
    else str += "not read yet.";
    return str;
}


function addBookToLibrary(title, author, pages, isRead)
{
    myLibrary.push(new Book(title, author, pages, isRead));
}

function displayBooks()
{
    for (let x in myLibrary)
    {
        if (!x.isDisplayed)
        {
        
        }
    }
}
