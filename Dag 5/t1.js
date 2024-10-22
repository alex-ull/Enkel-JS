function press() {
    let name = document.getElementById("name").value.trim();

    if (name.length == 0) {
        document.getElementById("greeting").innerHTML = "Navnet er ugyldig, prøv på nytt";
    }
    if (name != "") {
        document.getElementById("greeting").innerHTML = `Hallo ${name}`;
    }
        
}