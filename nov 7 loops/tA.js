function sub() {
    let out = document.getElementById("out");
    let num1 = Number (document.getElementById("num1").value);
    let num2 = Number (document.getElementById("num2").value);
    awns = ""; 

    if (num1 <= num2) {
        for (let loop = num1; loop <= num2; loop++) {
            awns += `<p class="subout">${loop}</p>`;
        }
    }
    else {
        awns = "Snu om på rekkefølgen."
    }

    out.innerHTML = awns;
}