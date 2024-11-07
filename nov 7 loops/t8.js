function sub() {
    let out = document.getElementById("out");
    let loop = 1;
    awns = "";
     

    while (loop <= 7) {
        awns += `<p>${loop} x ${loop} = ${loop*loop}</p>`;
        loop++;
    }

    out.innerHTML = awns;
}
