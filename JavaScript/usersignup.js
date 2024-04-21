
document.getElementsByTagName("form")[0].innerHTML= `<div class="input">
<label for="Fname">
  First name:
</label>
<input id="Fname" type="text" placeholder="Enter your first name" required>
<br> <br>
</div>
<div class="input">
<label for="Lname">
  Last name:
</label>
<input id="Lname" type="text" placeholder="Enter your Family name" required>
<br> <br>
</div>
<div class="input">
<label for="e-mail">
  E-mail:
</label>
<input id="e-mail" type="text" placeholder="Enter your e-mail address" required>
<br> <br>
</div>
<p class="invalidinput"></p>
<div class="input">
<label for="password">
  Password:
</label>
<input id="password" type="password" placeholder="Enter your password" required>
<br> <br>
</div>
<p class="invalidinput"></p>
<div class="input">
<label for="passwordconfirmation">
  Confirm password:
</label>
<input id="passwordconfirmation" type="password" placeholder="Confirm your password" required>
<br> <br>
</div>
<p class="invalidinput"></p>
<div class="input">
<label for="address">
  Address:
</label>

<input id="address" type="text" placeholder="Enter your address" required>
<br> <br>
</div>
<div class="input">
<label for="phonenumber">
  Phone number:
</label>
<input id="phonenumber" input type="tel" placeholder="01123456789" pattern="[0-9]{11}" required>

<br> <br>
</div>

<div class="wrap">
<button type="submit" id="userbtn" formaction='signin-user.html'>
  Sign up
</button>
</div>`

const password_regex = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[^A-Za-z0-9]+)(?=.*[0-9]+)(?=.{8,})/
const emailRegex= /(?=\w+[@]+)(?=.+\.(com$|edu$|info$))/

var pass = document.getElementById("password")
var cpass = document.getElementById("passwordconfirmation")
var email = document.getElementById("e-mail")
var btn = document.getElementById("userbtn")

function form (PASS,CPASS,EMAIL){
    this.checkPass = () => {
        let para = document.getElementsByClassName("invalidinput")[1]
        if (!(password_regex.test(PASS))) {
            para.innerText = ((PASS =='' || PASS == null) ? "*Please enter a password" : "*Password doesn't match the pattern")
            return false
        }
        else {
            para.innerText = ''
            return true
        }
    };
    this.checkConfirmPass = () => {
        let para = document.getElementsByClassName("invalidinput")[2]
        if (CPASS !== PASS) {
            para.innerText = "*Password doesn't match"
            return false
        }
        else {
            para.innerText = ''
            return true
        }
    };
    this.checkEmail = () => {
        let para = document.getElementsByClassName("invalidinput")[0]
        if (!(emailRegex.test(EMAIL))) {
            para.innerText = "*Invalid Email"
            return false
        }
        else if(Object.keys(localStorage).includes(email.value))
        {
            para.innerText = "*Email Already In Use"
            return false
        }
        else {
            para.innerText = ''
            return true
        }
    };
    this.eval = [this.checkPass(),this.checkConfirmPass(),this.checkEmail()].includes(false);
}
btn.addEventListener("click", function (event) {
    const formValidity = new form(pass.value,cpass.value,email.value)
    if (formValidity.eval) {
        event.preventDefault()
    }
    else
    {
        sessionStorage.setItem(email.value,pass.value)
    }
});
