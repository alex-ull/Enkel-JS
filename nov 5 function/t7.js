function sub() {
    let namef = document.getElementById("inn1").value;
    let namem = document.getElementById("inn2").value;
    let namel = document.getElementById("inn3").value;
    let awns = document.getElementById("out");

    awns.innerHTML = nam(namef, namem, namel)
}

function nam(a, b, c) {
    if (a + b + c) {
        return `${a.toUpperCase().slice(0,1)}. ${b.toUpperCase().slice(0,1)}. ${c}`;
    }
}