function verify() {
    let uname = document.getElementById("uname").value;
    let psw = document.getElementById("psw").value;

    let user = "username"
    let key = "password"

    if (uname == user && psw == key) {
        document.getElementById("warning").innerHTML = "Ops. Something went wrong!";
    }
        

    else {
        document.getElementById("warning").innerHTML = "Wrong username and/or password!";
    }
}