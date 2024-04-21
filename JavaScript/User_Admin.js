function go_to_bookDescription() {
    window.location.href = "../Adimn_Home_page/Select.html";
}
class book{
    constructor(Bookname, Id, author, categoreys, description1, description2, rating, no_pages, BookCover) {
        this.Bookname = Bookname;
        this.Id = Id;
        this.author = author;
        this.categoreys = categoreys;
        this.description1 = description1;
        this.description2 = description2;
        this.rating = rating;
        this.no_pages = no_pages;
        this.BookCover = BookCover;
    }
}
var book1 = new book("Circe",1,"Madeline Miller","Fantasy","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing"
,7,100,"../images/OIP.jpeg"
)
var book2 = new book("Game of Thrones",2,"George R.R. Martin","Fantasy","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing",
10,200,"../images/x960.jpg"
)
var book3 = new book("The Hitchhiker’s Guide to the Galaxy",3,"Douglas Adams","Science Fiction","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing",
10,200,"../images/13.jpg"
)
var book4 = new book("The Atlantis Gene",4,"A.G. Riddle","Science Fiction","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing",
10,200,"../images/1940026016.jpg"
)
var book5 = new book("Gone Girl",5,"Gillian Flynn","Mystery / Thriller","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing",
10,200,"../images/Gone-girl-pdf.jpg"
)
var book6 = new book("The Girl with the Dragon Tattoo",6,"Stieg Larsson","Mystery / Thriller","Personal Finance, Parenting, and Investing.","Robert's story of growing up with two dads — his real father and the father of his best friend, his rich dad — and the ways in which both men shaped his thoughts about money and investing",
10,200,"../images/OIP (1).jpeg"
)
let allbooks = JSON.parse(sessionStorage.getItem("books")) || [book1, book2, book3, book4, book5, book6];
// let allbooks = [book1, book2, book3, book4, book5, book6];
// sessionStorage.setItem("books", JSON.stringify(allbooks));
let books4 = allbooks.slice(0, allbooks.length/2);
let books5 = allbooks.slice(allbooks.length/2,allbooks.length);


sessionStorage.setItem("availablebooks",JSON.stringify(books5));
sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
function getBooks(category){
    for (let j = 0; j < allbooks.length; j++) {
        const book = allbooks.filter(book => book.categoreys.includes(category));
        let booksHtml = book.map((book) => {
            return `<div class="cards" id="book${book.Id}">
            <div class="flip-card">
                <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img src="${book.BookCover}" alt="Avatar" style="width:300px;height:300px;">
                        </div>
                        <div class="flip-card-back">
                            <h1>${book.Bookname}</h1>
                            <p>${book.description1}</p>
                            <p>${book.description2}</p>
                            <a href="../User_Home_page/bookdetails.html" class="see"  onclick="details(this)">
                                    See More..
                            </a>
                        </div>
                    </div>
                </div>
                <p>${book.Bookname}</p>
                <div class="Edit_Delete_buttns">
                    <button class="buttns" onclick="go_to_bookDescription()">Edit</button>
                    <button class="buttns" onclick="deletebook(this)"><i class="fa fa-trash-o" style="font-size:25px"></i></button>
                </div>
            </div>`;
        }).join('');
        return booksHtml;
    }
}
var booklistPart1 = document.getElementById("Fantasy");
var booklistPart2 = document.getElementById("Science Fiction");
var booklistPart3 = document.getElementById("Mystery / Thriller");
function renderBooks(){
    booklistPart1.innerHTML = getBooks("Fantasy")
    booklistPart2.innerHTML = getBooks("Science Fiction")
    booklistPart3.innerHTML = getBooks("Mystery / Thriller")
}
renderBooks();
var userType = JSON.parse(sessionStorage.getItem("userType"));
getnavbar();
if (userType === "admin") {
    document.getElementById("Admin_page").style.display = "block";
} else if (userType === "user") {
    document.getElementById("user_page").style.display = "block";
} else {
    alert("Invalid user type in URL!");
}

function check(parentid,ctn) {
    if (parentid === "Fantasy"&&ctn==0) {
        var books1Elements = document.getElementsByClassName("books1");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Fantasy").style.display = "none";
        return;
    } 
    if (parentid === "Science Fiction"&&ctn==0) {
        var books1Elements = document.getElementsByClassName("books2");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Science Fiction").style.display = "none";
    } 
    if (parentid === "Mystery / Thriller"&&ctn==0) {
        var books1Elements = document.getElementsByClassName("books3");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Mystery / Thriller").style.display = "none";
    } 
}

function deletebook(button){
    var bookDiv = button.parentElement.parentElement;
    // console.log(bookDiv.id);
    bookDiv.style.transition = 'opacity 0.5s, height 0.5s';
    bookDiv.style.opacity = '0';
    bookDiv.style.height = '0';
    var category = button.parentElement.parentElement.parentElement.id;
    setTimeout(function() {
        bookDiv.remove();
        // console.log(parentid);
        var parentId = bookDiv.id;
        var lastChar = parentId.charAt(parentId.length - 1);
        var lastCharInt = parseInt(lastChar);
        allbooks = allbooks.filter(function (book) {
            return book.Id !== lastCharInt;
        });
        var ctn = 0;
        sessionStorage.setItem("books",JSON.stringify(allbooks));
        for (let i = 0; i < allbooks.length; i++) {
            const book = allbooks[i];
            if(book.categoreys.includes(category)){
                ctn++;
            }
        }
        check(category,ctn);
    }, 500);
}

function getborrowbooks(){
    let booksHtml = books4.map((book) => {
        return (
            `<div class="card" id="book${book.Id}">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${book.BookCover}" alt="Avatar" style="width:300px;height:300px;">
                        </div>
                        <div class="flip-card-back">
                            <h1>${book.author}</h1>
                            <p>${book.description1}</p>
                            <p>${book.description2}</p>
                            <a href="../User_Home_page/bookdetails.html" class="see"  onclick="details(this)">
                                See More..
                            </a>
                        </div>
                    </div>
                </div>
                <p>${book.Bookname}</p>
                <button onclick="DeleteBorrowBook(this)">Return</button>
            </div>`
        );
    }).join('');
    return booksHtml;
}

function getavailablebooks(){
    let booksHtml = books5.map((book) => {
        return (
            `<div class="card" id="book${book.Id}">
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="${book.BookCover}" alt="Avatar" style="width:300px;height:300px;">
                        </div>
                        <div class="flip-card-back">
                            <h1>${book.author}</h1>
                            <p>${book.description1}</p>
                            <p>${book.description2}</p>
                            <a href="../User_Home_page/bookdetails.html" class="see"  onclick="details(this)">
                                See More..
                            </a>
                        </div>
                    </div>
                </div>
                <p>${book.Bookname}</p>
                <button onclick="DeleteavailableBook(this)">Borrow</button>
            </div>`
        );
    }).join('');
    return booksHtml;
}
var booklistborrow1 = document.getElementById("borrowBooks");
var booklistavailable1 = document.getElementById("availablebooks");
function renderborrowBooks(){
    booklistborrow1.innerHTML = getborrowbooks()
}
renderborrowBooks();

function renderavailablebooks(){
    booklistavailable1.innerHTML = getavailablebooks()
}

renderavailablebooks();

function checkBorrow() {
    if (books4.length === 0) {
        document.getElementById("Borrow").style.display = "none";
        document.getElementById("hide").style.display = "none";
    } 

}
function DeleteBorrowBook(button){
    var bookDiv = button.parentElement;
    var parentId = bookDiv.id;
    var lastChar = parentId.charAt(parentId.length - 1);
    var lastCharInt = parseInt(lastChar);

    bookDiv.style.transition = 'opacity 0.5s, height 0.5s';
    bookDiv.style.opacity = '0';
    bookDiv.style.height = '0';

    setTimeout(function () {
        bookDiv.remove();

        // Find the book in books4 with the corresponding ID
        var selectedBook = books4.find(function (book) {
            return book.Id === lastCharInt;
        });
        // Move the selected book from books4 to books5
        if(books5.length===0){
            document.getElementById("Available").style.display = "flex";
            document.getElementById("availablebooks").style.display = "flex";
            document.getElementById("hide1").style.display = "block";
            document.getElementById("Borrow").style.marginTop = "112px";
        }
        books5.push(selectedBook);
        renderavailablebooks();
        // Remove the selected book from books4
        books4 = books4.filter(function (book) {
            return book.Id !== lastCharInt;
        });
        sessionStorage.setItem("availablebooks",JSON.stringify(books5));
        sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
        checkBorrow();
    }, 500);
}
function checkavailble(){
    if (books5.length === 0) {
        document.getElementById("Available").style.display = "none";
        document.getElementById("availablebooks").style.display = "none";
        document.getElementById("hide1").style.display = "none";
        document.getElementById("Borrow").style.marginTop = "0px";
    } 
}
function DeleteavailableBook(button){
    var bookDiv = button.parentElement;
    var parentId = bookDiv.id;
    var lastChar = parentId.charAt(parentId.length - 1);
    var lastCharInt = parseInt(lastChar);

    bookDiv.style.transition = 'opacity 0.5s, height 0.5s';
    bookDiv.style.opacity = '0';
    bookDiv.style.height = '0';

    setTimeout(function () {
        bookDiv.remove();
        // Find the book in books4 with the corresponding ID
        var selectedBook = books5.find(function (book) {
            return book.Id === lastCharInt;
        });
        // Move the selected book from books4 to books5
        if(books4.length===0){
            document.getElementById("Borrow").style.display = "flex";
        document.getElementById("hide").style.display = "block";
        }
        books4.push(selectedBook);
        renderborrowBooks();
        // Remove the selected book from books4
        books5 = books5.filter(function (book) {
            return book.Id !== lastCharInt;
        });
        sessionStorage.setItem("availablebooks",JSON.stringify(books5));
        sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
        checkavailble();
    }, 500);

}
function getnavbar(){
    var navbar = document.getElementById("navbaradmin");
    navbar.innerHTML = `<div class="logoandsearch">
        <a href="../home_page/home.html" class="LogoIcon" onclick="AdminHomeuser()">
        <img src="../images/logopng-removebg.png" alt="can't display image">
        </a>
        <a href="../home_page/home.html" class="Logo" onclick="AdminHomeuser()">eBookNest</a>
    </div>
    <div class="bottomline">
        <a href="../home_page/home.html" class="quick" title="Admin Homepage" style="
            color: #ffffff;
            text-decoration: underline;
            font-size: 35px;
            color: burlywood;
            padding-bottom: 0px;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            text-underline-offset: 15.25px;" onclick="AdminHomeuser()">Home</a>
        <a href="../Adimn_Home_page/add.html" class="quick" title="add a new book">Add Book</a>
        <a href="../Adimn_Home_page/Select.html" class="quick" title="edit an existing book">Edit Book</a>
        <a href="../Adimn_Home_page/delete.html" class="quick" title="remove a book from the list">Delete Book</a>
        <a href="AboutUs.html" class="quick" title="Who are we?">About Us</a>
        <a href="../LogIn/main-sign-page.html" class="quick" title="log out">Sign Out</a>
        <label for="Search" class="srch">Search:</label>
        <input type="text" id="SBar" name="Search Bar" placeholder="Search for a book title...">
    </div>`;
    navbar = document.getElementById("navbaruser");
    navbar.innerHTML = `<div class="logoandsearch">
        <a href="../home_page/home.html" class="LogoIcon" onclick="UserHomeuser()">
        <img src="../images/logopng-removebg.png" alt="can't display image">
        </a>
        <a href="../home_page/home.html" class="Logo" onclick="UserHomeuser()">eBookNest</a>
    </div>
    <div class="bottomline">
        <a href="../home_page/home.html" class="quick" title="Admin Homepage" style="
            color: #ffffff;
            text-decoration: underline;
            font-size: 35px;
            color: burlywood;
            padding-bottom: 0px;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            text-underline-offset: 15.25px;" onclick="UserHomeuser()">Home</a>
            
        <a href="../User_Home_page/availavbleBooks.html" class="quick" title="Available books">Available books</a>
        <a href="../User_Home_page/availavbleBooks.html" class="quick" title="Borrow books">Borrow books</a>

        <a href="AboutUs.html" class="quick" title="Who are we?">About Us</a>

        <a href="../LogIn/main-sign-page.html" class="quick" title="log out">Sign Out</a>
        <label for="Search" class="srch">Search:</label>
        <input type="text" id="SBar" name="Search Bar" placeholder="Search for a book title...">
    </div>`;
}
function check_empty(){
    if(booklistPart1.innerHTML===""){
        var books1Elements = document.getElementsByClassName("books1");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Fantasy").style.display = "none";
        return;
    }
    else if(booklistPart2.innerHTML===""){
        var books1Elements = document.getElementsByClassName("books2");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Science Fiction").style.display = "none";
    }
    else if(booklistPart3.innerHTML===""){
        var books1Elements = document.getElementsByClassName("books3");
        
        for (var i = 0; i < books1Elements.length; i++) {
            books1Elements[i].style.transition = 'opacity 0.5s, height 0.5s';
            books1Elements[i].style.opacity = '0';
            books1Elements[i].style.height = '0';
        }
        document.getElementById("Mystery / Thriller").style.display = "none";
    }
}
check_empty();
function details(button){
    // Get the parent element of the button, which should be the div containing book details
    var bookDiv = button.parentElement.parentElement.parentElement.parentElement;

    // Extract the id of the parent div
    var parentId = bookDiv.id;

    // Extract the last character of the parentId and convert it to an integer
    var lastChar = parentId.charAt(parentId.length - 1);
    var lastCharInt = parseInt(lastChar);

    // Find the book with the matching id in the allbooks array
    var selectedBook = allbooks.find(function (book) {
        return book.Id === lastCharInt;
    });
    if(userType === "user"){var booktype = bookDiv.parentElement.id;
    sessionStorage.setItem("booktype", JSON.stringify(booktype));}
    sessionStorage.setItem("details", JSON.stringify(selectedBook));
}

function checkBorrowhead(){
    var div = document.getElementById("borrowBooks");
    if(div.innerHTML===""){
        document.getElementById("Borrow").style.display = "none";
        document.getElementById("hide").style.display = "none";
    }
}

function checkavailablehead(){
    var div = document.getElementById("availablebooks");
    if(div.innerHTML===""){
        document.getElementById("Available").style.display = "none";
        document.getElementById("availablebooks").style.display = "none";
        document.getElementById("hide1").style.display = "none";
        document.getElementById("Borrow").style.marginTop = "0px";
    }
}
checkBorrowhead();
checkavailablehead();