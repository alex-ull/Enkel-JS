function cv() {
    let r = Number (document.getElementById("red").value);
    let g = Number (document.getElementById("green").value);
    let b = Number (document.getElementById("blue").value);

    if (document.getElementById("red").value) {
        document.getElementById("bgc").style.backgroundColor=`rgb(${r},${g},${b})`;
        document.getElementById("dspr").innerHTML = r;
    }
    if (document.getElementById("green").value) {
        document.getElementById("bgc").style.backgroundColor=`rgb(${r},${g},${b})`;
        document.getElementById("dspg").innerHTML = g;
    }
    if (document.getElementById("blue").value) {
        document.getElementById("bgc").style.backgroundColor=`rgb(${r},${g},${b})`;
        document.getElementById("dspb").innerHTML = b;
    }
}