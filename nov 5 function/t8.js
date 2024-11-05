function sub() {
    let pris = Number (document.getElementById("inn1").value);
    let kurs = Number (document.getElementById("inn2").value);
    let awns = document.getElementById("out");

    awns.innerHTML = toll(pris, kurs);
}

function toll(usd, dkurs) {
    dkurs = dkurs || 10.00;
    usd = usd || 100

    const mva = 1.25;
    const gebyr = 249;

    let nok = 0;
    nok = usd * dkurs;
    nok = nok + gebyr;
    nok = nok + mva;

    return `Prisen på varen i norske kroner er ${nok} etter toll.`
}