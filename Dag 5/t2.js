function sum() {
    let v1 = Number(document.getElementById("val1").value);
    let v2 = Number(document.getElementById("val2").value);
    let op = document.getElementById("drop").value;
    let a = document.getElementById("addit").value;
    let s = document.getElementById("subta").value;
    let m = document.getElementById("multi").value;
    let d = document.getElementById("divit").value;
    
    if (op == a) {
        awnser = v1 + v2;
    }
    else if (op == s) {
        awnser = v1 - v2;
    }
    else if (op == m) {
        awnser = v1 * v2;
    }
    else {
        awnser = v1 / v2;
    }
    document.getElementById("out").innerHTML = awnser;
}