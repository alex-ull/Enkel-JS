function sub() {
    let out = document.getElementById("out");
    let txt = document.getElementById("txt").value;
    let num = Number (document.getElementById("num").value);
    awns = ""; 

    for (let loop = 1; loop <= num; loop++) {
        awns += `<p class="subout">${txt}</p>`;
    }

    out.innerHTML = awns;
}