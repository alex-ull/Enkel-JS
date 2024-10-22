function color() {
    if (document.getElementById("red").checked) {
        document.getElementById("bg").style.backgroundColor = "#ff0000";
    }
    else if (document.getElementById("green").checked) {
        document.getElementById("bg").style.backgroundColor = "#00ff00";
    }
    else {
        document.getElementById("bg").style.backgroundColor = "#0000ff";
    }
}