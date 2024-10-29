function crea() {
    let name = document.getElementById("name").value;
    let gender = document.getElementById("gender").value;
    let age = document.getElementById("age").value;

    let year = new Date();
    console.log(year.getFullYear());

    let indi = ""

    if (gender == "herre" && age < 18) {
        indi = "gutt"
    }
    else if (gender == "herre" && age >= 18) {
        indi = "mann"
    }
    else if (gender == "d" && age < 18) {
        indi = "Jente"
    }
    else if (gender == "d" && age >= 18) {
        indi = "kvinne"
    }
    else {indi = "person"} 

    let text = `Det var en gang en ${indi} som het ${name}, og var født i ${year.getFullYear() - age}. Denne personen er nå ${age} år, og har ${100 - age} år igjen til 100-års-dagen sin!`;
    document.getElementById("story").innerHTML = text;
}

