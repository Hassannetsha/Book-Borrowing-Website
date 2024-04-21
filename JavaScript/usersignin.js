document.getElementsByTagName("form")[0].innerHTML = `<div class="input">
<i class="fa-solid fa-user"></i>
<input id="email" type="text" placeholder="Enter your e-mail" required>
</div>
<div class="input">
<i class="fa-solid fa-lock"></i>
<input id="pass" type="password" placeholder="Enter your Password" required>
</div>
<p class="invalidinput"></p>
<div class="wrap">
<button id="signinuserbtn" type="submit" formaction="../home_page/home.html">
    Sign in
</button>
</div>
<br>
<p>You do not have an account?<a href="signup-user.html">Create account.</a></p>

`

var pass = document.getElementById('pass')
var email = document.getElementById('email')
var btn = document.getElementById('signinuserbtn')
var para = document.getElementsByClassName('invalidinput')[0]

btn.addEventListener('click', (event) => {
    if(Object.keys(sessionStorage).includes(email.value))
    {
        if(sessionStorage[email.value] !== pass.value)
        {
            para.innerText = '*Invalid Email or Password!'
            event.preventDefault()
        }
        else
        {
            para.innerText = ''
        }
    }
    else
    {
        para.innerText = '*Invalid Email or Password!'
        event.preventDefault()
    }
    sessionStorage.setItem("userType", JSON.stringify("user"));
})