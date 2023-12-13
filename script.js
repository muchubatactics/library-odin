class Book
{
    constructor(title, author, pages, isRead)
    {
        this.title = title;
        this.author = author;
        this.numberOfPages = pages;
        this.isRead = isRead;
        this.isDisplayed = false;
    }

    info()
    {
        let str = `${this.title} by ${this.author}, ${this.numberOfPages} pages, `;
        if (this.isRead) str += "already read.";
        else str += "not read yet.";
        return str;
    }

    toggleReadValue()
    {
        this.isRead = this.isRead ? false : true;
    }
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
    for (let i = 0; i < myLibrary.length; ++i)
    {
        if (!myLibrary[i].isDisplayed)
        {
            let a = document.createElement("div");
            a.classList.add("image");
            let image = document.createElement("img");
            image.setAttribute("src", `https://source.unsplash.com/random/200x200?sig=${Math.random()}`);
            a.appendChild(image);
            let b = document.createElement("div");
            let title = document.createElement("div");
            title.classList.add("title");
            title.textContent = String(myLibrary[i].title);
            let author = document.createElement("div");
            author.classList.add("author");
            author.textContent = String(myLibrary[i].author);
            let pages = document.createElement("div");
            pages.classList.add("pages");
            pages.textContent = `${myLibrary[i].numberOfPages} pages`;
            let boolean = document.createElement("div");
            boolean.classList.add("boolean");
            if (myLibrary[i].isRead) boolean.textContent = "Already read";
            else { boolean.textContent = "Not yet read"; boolean.style = "color: red";}
            b.appendChild(title);
            b.appendChild(author);
            b.appendChild(pages);
            b.appendChild(boolean);
            
            let btnDiv = document.createElement("div");
            btnDiv.classList.add("btn-div");
            
            let toggleRead = document.createElement("button");
            toggleRead.classList.add("toggle-read");
            toggleRead.setAttribute("data-index", `${i}`);
            toggleRead.textContent = "Toggle Read";
            toggleRead.addEventListener("click", () => {
                let i = deleteBook.getAttribute("data-index");
                myLibrary[i].toggleReadValue();
                if (myLibrary[i].isRead) {boolean.textContent = "Already read"; boolean.style = "color: gray";}
                else { boolean.textContent = "Not yet read"; boolean.style = "color: red";}
            });
            
            btnDiv.appendChild(toggleRead);
            
            let deleteBook = document.createElement("button");
            deleteBook.classList.add("delete-book");
            deleteBook.textContent = "DELETE";
            deleteBook.setAttribute("data-index", `${i}`);
            deleteBook.addEventListener("click", () => {
                let i = deleteBook.getAttribute("data-index");
                myLibrary.splice(i, 1);
                let xx = document.querySelectorAll('[data-index="' + `${i}"]`);
                for (let xxx of xx)
                {
                    xxx.remove();
                }
                let yy = document.querySelectorAll('[data-index]');
                let count = 0, value = 0;
                for (let y of yy)
                {
                    y.setAttribute("data-index", `${value}`);
                    count++;
                    if (count % 4 == 0) value++;
                }

            });

            btnDiv.appendChild(deleteBook);
            b.appendChild(btnDiv);
            
            a.setAttribute("data-index", `${i}`);
            b.setAttribute("data-index", `${i}`);
            
            bookGrid.appendChild(a);
            bookGrid.appendChild(b);

            myLibrary[i].isDisplayed = true;
        }
    }
}

displayBooks();

let form = document.querySelector(".form");
let dialog = document.querySelector("dialog");
let addButton = document.querySelector(".add-btn");
addButton.addEventListener("click", () => {
    dialog.showModal();
});

let closeButton = document.querySelector(".close-dialog");
closeButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

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
    form.reset();

});