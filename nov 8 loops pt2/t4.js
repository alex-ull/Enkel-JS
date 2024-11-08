function sub() {
    let out = document.getElementById("out");
    let i = 10;
    awns = "";

    while (i > 0) {
        let rep = `${i} green bottles, hanging on a wall,\n`;
        awns += rep + rep + `If 1 green bottle were to accidentally fall\nThere'd be ${i-1} green bottles, hanging on the wall\n\n`;
        i--;
    }

    out.innerText = awns;
}