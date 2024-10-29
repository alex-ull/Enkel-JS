let num = ""

function plus() {
    num + 1;

    document.getElementById("typefield").innerHTML += `${num}` +". " + document.getElementById("bok").value + "\n";

    document.getElementById("bok").value = "";
    document.getElementById("bok").focus();
}
