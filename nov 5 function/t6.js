function sub() {
    let val1 = Number (document.getElementById("inn1").value);
    let val2 = Number (document.getElementById("inn2").value);
    let val3 = Number (document.getElementById("inn3").value);
    let awns = document.getElementById("out");

    awns.innerHTML = sqr(val1, val2, val3)
}

function sqr(a, b, c) {
    return `Overflaten av esken er ${2 * a * b + 2 * a * c + 2 * b * c}cm<sup>2</sup>`;
}