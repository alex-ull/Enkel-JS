function sub() {
    let out = document.getElementById("out");
    awns = ""; 

    for (let loop = 1; loop <= 100; loop++) {
        if (loop%2 != 0) {
            awns += `${loop}, `; 
        }
    }

    out.innerHTML = awns;
}