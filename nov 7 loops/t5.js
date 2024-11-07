function sub() {
    let out = document.getElementById("out");
    awns = ""; 

    for (let loop = 1; loop <= 100; loop++) {
        if (loop%8 == 0 || loop%3 == 0) {
            awns += `${loop}, `;
        }
    }

    out.innerHTML = awns;
}