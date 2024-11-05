function sub() {
    let val = Number (document.getElementById("inn").value);
    let awns = document.getElementById("out");

    awns.innerHTML = sqr(val)
}

function sqr(r) {
    return `Arealet av sirkelen er ${Math.PI*r^2}cm<sup>2</sup>`;
}