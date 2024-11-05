function sub() {
    let val1 = Number (document.getElementById("inn1").value);
    let val2 = Number (document.getElementById("inn2").value);
    let awns = document.getElementById("out");

    awns.innerHTML = sqr(val1, val2)
}

function sqr(a, b) {
    return `Arealet av rektangelet er ${a * b}cm<sup>2</sup>`;
}