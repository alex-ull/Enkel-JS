function sub() {
    let out = document.getElementById("out");
    awns = ""; 

    for (let loop = 0; loop <= 100; loop++) {
        awns += `<p>${loop} x ${loop} = ${loop*loop}</p>`;
    }

    out.innerHTML = awns;
}