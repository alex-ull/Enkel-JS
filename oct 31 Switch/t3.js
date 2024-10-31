function conf() {
    let guess = document.getElementById("guess").value;

    switch (guess) {
        case "h":
        case "H":
            document.getElementById("awns").innerHTML = "Du anntar at det blir hjemmeseier.";
            break;

        case "u":
        case "U":
            document.getElementById("awns").innerHTML = "Du anntar at det blir uavgjort.";
            break;

        case "b":
        case "B":
            document.getElementById("awns").innerHTML = "Du anntar at det blir borteseier.";
            break;
    
        default: document.getElementById("awns").innerHTML = "Ugyldig verdi. Skriv inn h, u eller b.";
            break;
    }
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}