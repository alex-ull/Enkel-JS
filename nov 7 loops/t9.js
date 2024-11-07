function sub() {
    let out = document.getElementById("out");
    let loop = 12;
    awns = "";
     

    while (loop <= 98) {
        awns += `<p>${loop} x ${loop} = ${loop*loop}</p>`;
        loop += 5;
    }

    out.innerHTML = awns;
}