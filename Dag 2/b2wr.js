function run() {
    let kg = Number (document.getElementById("weight").value);
    let m = Number (document.getElementById("height").value);
    let bmi = kg / (m*m);
    let wkg = `${kg}kg`;
    let hm = `${m}m`;
    document.getElementById("w").innerHTML = wkg;
    document.getElementById("h").innerHTML = hm;
    document.getElementById("r").innerHTML = bmi;
}