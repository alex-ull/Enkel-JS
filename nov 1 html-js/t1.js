function sub() {
    let num = Number (document.getElementById("inn").value);

    if (num % 2 == 0) {
        console.log("partal");
        val = "partal"
    }
    else {
        console.log("oddetal");
        val = "oddetal"
    }
    document.getElementById("out").innerHTML = `${num} er eit ${val}.`;
}