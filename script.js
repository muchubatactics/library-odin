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
let myLibrary = [ 
    new Book("The Power Of Now", "Edgar Muyomba",304, false), 
    new Book("Can't Hurt Me", "David Goggins", 334, true), 
    new Book("The Psychology Of Money","Ssenono Jordan", 524, true),
];
let bookGrid = document.querySelector(".lib-grid");



function addBookToLibrary(title, author, pages, isRead)
{
    myLibrary.push(new Book(title, author, pages, isRead));
    displayBooks();
}

function displayBooks()
{
    for (let x of myLibrary)
    {
        console.log(x);
        if (!x.isDisplayed)
        {
            let a = document.createElement("div");
            a.classList.add("image");
            let image = document.createElement("img");
            image.setAttribute("src", `https://source.unsplash.com/random/200x200?sig=${Math.random()}`);
            a.appendChild(image);
            let b = document.createElement("div");
            let title = document.createElement("div");
            title.classList.add("title");
            title.textContent = String(x.title);
            let author = document.createElement("div");
            author.classList.add("author");
            author.textContent = String(x.author);
            let pages = document.createElement("div");
            pages.classList.add("pages");
            pages.textContent = `${x.numberOfPages} pages`;
            let boolean = document.createElement("div");
            boolean.classList.add("boolean");
            if (x.isRead) boolean.textContent = "Already read";
            else { boolean.textContent = "Not yet read"; boolean.style = "color: red";}
            b.appendChild(title);
            b.appendChild(author);
            b.appendChild(pages);
            b.appendChild(boolean);
            bookGrid.appendChild(a);
            bookGrid.appendChild(b);
            x.isDisplayed = true;
        }
    }
}

displayBooks();

let dialog = document.querySelector("dialog");
let addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", () => {
    dialog.showModal();
});

let closeButton = document.querySelector(".close-dialog");
closeButton.addEventListener("click", () => {
    dialog.close();
});

let form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = Number(document.getElementById("pages").value);
    let isReadbool;
    let x = document.getElementsByName("is-read");
    for (let i = 0; i < x.length; i++)
    {
        if (x[i].checked)
        {
            if (x[i].value == "yes") isReadbool = true;
            else isReadbool = false;
        }
    }
    addBookToLibrary(title, author, pages, isReadbool);
    dialog.close();

});