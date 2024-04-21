
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

let allbooks = JSON.parse(sessionStorage.getItem("books"))

document.getElementById("formedit").innerHTML = `<div class="input">
<label for="BookName"> Edit book name:</label>
<input type="text" id="BookName" placeholder="Book's Name">
</div>



<br>
<br>
<div class="input">
<label for="author"> Edit book's author:</label>
<input type="text" id="author" placeholder="Book's author">
</div>

<br>
<br>
<div class="input">
<label for="BookCategory"> Edit book's category:</label>
<input type="text" id="BookCategory"  placeholder="Book's category">
</div>

<br>
<br>
<div class="input">
<label for="BookDescription" > Edit book's description:</label>
<textarea name="comment--" id="BookDescription" cols="30" rows="10" placeholder="write book description"></textarea> 
</div>

<br><br>
<div class="input">
<label for="BookCover">Put book's cover image: </label>
<input type="file" id="BookCover">
</div>

<br>
<br>
<p class="invalidinput"></p>
<div class="box"> <div class="wrap">
<button type="submit" id="editbtn">
    Submit
</button>
</div>
<div class="wrap">
<button type="submit">
    Reset
</button>
</div>
</div>`

var editbtn = document.getElementById("editbtn")
var bookid = JSON.parse(sessionStorage.getItem("redirectid"));
var para = document.getElementsByClassName("invalidinput")[0]

editbtn.setAttribute('click', (event) => {
    for (let i = 0; i < allbooks.length; i++) {
        if (allbooks[i].Id == bookid) {
                allbooks[i].Bookname = document.getElementById("BookName").value//book name
                allbooks[i].author = document.getElementById("author").value,// authour
                allbooks[i].categoreys = document.getElementById("BookCategory").value,// category
                allbooks[i].description1 = document.getElementById("BookDescription").value,//description1
                allbooks[i].document.getElementById("BookCover").value//bookcover
                sessionStorage.setItem("books",JSON.stringify(allbooks))
            return
        }
    }
})
// localStorage.clear();