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
let books4 = JSON.parse(sessionStorage.getItem("borrowedbooks")) || allbooks.slice(0, allbooks.length/2);
let books5 = JSON.parse(sessionStorage.getItem("availablebooks")) || allbooks.slice(allbooks.length/2,allbooks.length);


sessionStorage.setItem("availablebooks",JSON.stringify(books5));
sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
var bookHtml = document.getElementById("book");
var bookimage = document.getElementById("image");
var buttonHtml = document.getElementById("button");
var userType = JSON.parse(sessionStorage.getItem("userType"));
var booktype = JSON.parse(sessionStorage.getItem("booktype"));
function getbookAndbutton(selectedBook) {
    bookimage.innerHTML = `<img src="${selectedBook.BookCover}" alt="" height="200px" width="200px">`;
    let booksHtml = `
        <p>Book Name:</p> ${selectedBook.Bookname}
        <br><br>
        <p id = "bookID">Book Id:</p> ${selectedBook.Id}
        <br><br>
        <p>Rating:</p> ${selectedBook.rating}
        <br><br>
        <p>Author:</p> ${selectedBook.author}
        <br><br>
        <p>Category:</p> ${selectedBook.categoreys}
        <br><br>
        <p>Descreption:</p> ${selectedBook.description1} ${selectedBook.description2}
        <br><br>`;
    if(userType==="user"){
        if(booktype === "availablebooks"){buttonHtml.innerHTML = `<button class="b" onclick = "Go_back()">Back</button>
        <button class="b" onclick = "DeleteavailableBook()">Borrow</button>
        <div class="heart" name="x"><i class="fa fa-heart" name="x"id = "fa"  onclick = "changeColor()"></i></div>`;}
        else if (booktype === "borrowBooks"){
            buttonHtml.innerHTML = `<button class="b" onclick = "Go_back()">Back</button>
        <button class="b" onclick = "DeleteBorrowBook()">Return</button>
        <div class="heart" name="x"><i class="fa fa-heart" name="x"id = "fa"  onclick = "changeColor()"></i></div>`;
        }
    }
    else if (userType==="admin"){
        buttonHtml.innerHTML = `<button class="b" onclick = "Go_back()">Back</button>
        <button class="b" onclick = "go_to_Edit()">Edit</button>
        <div class="heart" name="x"><i class="fa fa-trash-o" name="x" style="font-size:40px; padding-left: 21px;" onclick = "deletebook()"></i></div>`;
    }
    return booksHtml;
}
var willDeletebook = JSON.parse(sessionStorage.getItem("details"))
function DeleteavailableBook(){
    var selectedBook = books5.find(function (book) {
        return book.Id === willDeletebook.Id;
    });
    books4.push(selectedBook);
    books5 = books5.filter(function (book) {
        return book.Id !== willDeletebook.Id;
    });
    sessionStorage.setItem("availablebooks",JSON.stringify(books5));
    sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
    window.history.back();
}
function DeleteBorrowBook(){
    var selectedBook = books4.find(function (book) {
        return book.Id === willDeletebook.Id;
    });
    books5.push(selectedBook);
    books4 = books4.filter(function (book) {
        return book.Id !== willDeletebook.Id;
    });
    sessionStorage.setItem("availablebooks",JSON.stringify(books5));
    sessionStorage.setItem("borrowedbooks",JSON.stringify(books4));
    window.history.back();
}
function deletebook(){
    allbooks = allbooks.filter(function (book) {
        return book.Id !== willDeletebook.Id;
    });
    sessionStorage.setItem("books",JSON.stringify(allbooks));
        
    window.history.back();
}
function changeColor1() {
    var fa = document.getElementById("fa");
    if(fa.style.color === "red"){
        fa.style.color = "white";
    }
    else{
        fa.style.color = "red";
    }
}
function changeColor(){
    var fa = document.getElementById("fa");
    if(fa.style.color === "red"){
        fa.style.color = "white";
    }
    else{
        fa.style.color = "red";
    }
}

function renderbookAndbutton() {
    var selectedBook = JSON.parse(sessionStorage.getItem("details"));
    bookHtml.innerHTML = getbookAndbutton(selectedBook);
}

renderbookAndbutton();

function getnavbar(){
    var navbar = document.getElementById("navbar");
    if(userType === "admin"){navbar.innerHTML = `<div class="logoandsearch">
        <a href="../home_page/home.html" class="LogoIcon" onclick="AdminHomeuser()">
        <img src="../images/logopng-removebg.png" alt="can't display image">
        </a>
        <a href="../home_page/home.html" class="Logo" onclick="AdminHomeuser()">eBookNest</a>
    </div>
    <div class="bottomline">
        <a href="../home_page/home.html" class="quick" title="Admin Homepage"  onclick="AdminHomeuser()">Home</a>
        <a href="../Adimn_Home_page/add.html" class="quick" title="add a new book">Add Book</a>
        <a href="../Adimn_Home_page/Select.html" class="quick" title="edit an existing book">Edit Book</a>
        <a href="../Adimn_Home_page/delete.html" class="quick" title="remove a book from the list">Delete Book</a>
        <a href="AboutUs.html" class="quick" title="Who are we?">About Us</a>
        <a href="../LogIn/main-sign-page.html" class="quick" title="log out">Sign Out</a>
        <label for="Search" class="srch">Search:</label>
        <input type="text" id="SBar" name="Search Bar" placeholder="Search for a book title...">
    </div>`;}
    if(userType === "user"){navbar.innerHTML = `<div class="logoandsearch">
        <a href="../home_page/home.html" class="LogoIcon" onclick="UserHomeuser()">
        <img src="../images/logopng-removebg.png" alt="can't display image">
        </a>
        <a href="../home_page/home.html" class="Logo" onclick="UserHomeuser()">eBookNest</a>
    </div>
    <div class="bottomline">
        <a href="../home_page/home.html" class="quick" title="Admin Homepage"  onclick="UserHomeuser()">Home</a>
            
        <a href="../User_Home_page/availavbleBooks.html" class="quick" title="Available books">Available books</a>
        <a href="../User_Home_page/borrrowedBooks.html" class="quick" title="Borrow books">Borrow books</a>

        <a href="AboutUs.html" class="quick" title="Who are we?">About Us</a>

        <a href="../LogIn/main-sign-page.html" class="quick" title="log out">Sign Out</a>
        <label for="Search" class="srch">Search:</label>
        <input type="text" id="SBar" name="Search Bar" placeholder="Search for a book title...">
    </div>`;}
}
getnavbar();
function Go_back(){
    window.history.back();
}
function go_to_Edit(){
    window.location.href = "../Adimn_Home_page/Edit.html";
}