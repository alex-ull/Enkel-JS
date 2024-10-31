function conf() {
    let guess = document.getElementById("guess").value.toLowerCase();

    switch (guess) {
        case "h":
            document.getElementById("awns").innerHTML = "Du anntar at det blir hjemmeseier.";
            break;

        case "u":
            document.getElementById("awns").innerHTML = "Du anntar at det blir uavgjort.";
            break;

        case "b":
            document.getElementById("awns").innerHTML = "Du anntar at det blir borteseier.";
            break;
    
        default: document.getElementById("awns").innerHTML = "Ugyldig verdi. Skriv inn h, u eller b.";
            break;
    }
    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();
}