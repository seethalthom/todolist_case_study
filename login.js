var username = document.getElementById("username");
var password = document.getElementById("inputPassword");
var emailhelp = document.getElementById("emailHelp");
var passwordhelp = document.getElementById("passwordHelp");

function user() {
    if (username.value == "admin") {
        // alert("Enter Username as admin");
        // console.log(username.value)
        emailhelp.innerHTML = "";

        return true;
    } else {
        emailhelp.innerHTML = "Username:admin";
        emailhelp.style.color = "red";
        emailhelp.style.fontFamily = "Garamond, serif"
            // alert("Password : 12345");
        return false;
    }
}

function pass() {
    if (password.value == "12345") {
        // alert("Enter Username as admin");

        passwordhelp.innerHTML = "";

        return true;
    } else {
        passwordhelp.innerHTML = "Password : 12345";
        passwordhelp.style.color = "red";
        passwordhelp.style.fontFamily = "Garamond, serif"


        // alert("Password : 12345");
        return false;
    }

}

function validate(callback) {
    if (user() && pass()) {
        callback();

    } else {
        return false;
    }
}

function display() {
    window.open("todolist.html");
    return true;
}