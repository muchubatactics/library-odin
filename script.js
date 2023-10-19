let myLibrary = [];

function Book(title, author, pages, isRead)
{
    this.title = title;
    this.author = author;
    this.numberOfPages = pages;
    this.isRead = isRead;
    this.info = function(){
        let str = `${this.title} by ${this.author}, ${this.numberOfPages} pages, `;
        if (this.isRead) str += "already read.";
        else str += "not read yet.";
        return str;
    } 
}