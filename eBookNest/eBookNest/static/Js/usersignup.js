
// document.getElementsByTagName("form")[0].innerHTML= ``

const password_regex = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[^A-Za-z0-9]+)(?=.*[0-9]+)(?=.{8,})/
const emailRegex= /(?=\w+[@]+)(?=.+\.(com$|edu$|info$))/

var pass = document.getElementById("password")
var cpass = document.getElementById("passwordconfirmation")
var email = document.getElementById("e-mail")
var number = document.getElementById("phonenumber")
var btn = document.getElementById("userbtn")

function form (PASS,CPASS,EMAIL,NUMBER){
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
        else if(Object.keys(sessionStorage).includes(email.value))
        {
            para.innerText = "*Email Already In Use"
            return false
        }
        else {
            para.innerText = ''
            return true
        }
    };
    this.checkNum = () => {
      let para = document.getElementsByClassName("invalidinput")[3]
      if(!((/[0-9]{11}/)).test(number.value))
      {
        para.innerText = "*Invalid Phone Number"
        return false
      }
      else
      {
        para.innerText = ""
        return true
      }
    };
    this.eval = [this.checkPass(),this.checkConfirmPass(),this.checkEmail(),this.checkNum()].includes(false);
}
btn.addEventListener("click", function (event) {
    const formValidity = new form(pass.value,cpass.value,email.value,number.value)
    if (formValidity.eval) {
        event.preventDefault()
    }
    else
    {
        sessionStorage.setItem(email.value,pass.value)
    }
});
