let list = "";

function add() {
    let item = document.getElementById("item").value;

    list += "<li>" + item + "</li>";
    document.getElementById("list").innerHTML = list;

    document.getElementById("item").value = "";
    document.getElementById("item").focus();
}

function wipe() {
    document.getElementById("list").innerHTML = "";
}