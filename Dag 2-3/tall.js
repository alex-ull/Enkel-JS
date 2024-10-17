function calculate() {
    let numWright = Number (document.getElementById("numWright").value);
    let half = numWright / 2;
    let dubl = numWright * 2;
    let trpl = numWright * 3;
    let squr = numWright * numWright;
    document.getElementById("num").innerHTML = numWright;
    document.getElementById("ahalf").innerHTML = half;
    document.getElementById("adubl").innerHTML = dubl;
    document.getElementById("atrpl").innerHTML = trpl;
    document.getElementById("asqur").innerHTML = squr;
}