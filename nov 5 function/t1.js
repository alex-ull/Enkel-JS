function sub() {
    let age = document.getElementById("inn").value;
    let awns = document.getElementById("out");

    awns.innerHTML = check(age)
}

function check(year) {
    if (year >= 67) {
        return "Du er Honnør/pensjonist";
    }
    else if (year >= 20) {
        return "Du er voksen";
    }
    else if (year >= 13) {
        return "Du er ein tennåring";
    }
    else {
        return "Du er eit barn";
    }
}