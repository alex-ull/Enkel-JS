function conf() {
    let guess = document.getElementById("guess").value.toLowerCase();

    if (guess == "h") {
        document.getElementById("awns").innerHTML = "Du anntar at det blir hjemmeseier."
    }
    else if (guess == "u") {
        document.getElementById("awns").innerHTML = "Du anntar at det blir uavgjort."
    }
    else if (guess == "b") {
        document.getElementById("awns").innerHTML = "Du anntar at det blir borteseier."
    }
    else {
        document.getElementById("awns").innerHTML = "Ugyldig verdi. Skriv inn h, u eller b."
    }

    document.getElementById("guess").value = "";
    document.getElementById("guess").focus();

    console.log(guess);
    
}