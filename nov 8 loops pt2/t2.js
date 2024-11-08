function sub() {
    let out = document.getElementById("out");
    let table = "<table style='width:500px'>";
    let num1, num2, awns;

    for (num1 = 1; num1 <= 10; num1++) {
        table += "<tr>";

        for (num2 = 1; num2 <= 10; num2++) {
            awns = num1 * num2;
            table += "<td>"+ awns +"</td>";
        }
        table += "</tr>"
    }
    table += "</table>"

    out.innerHTML = table;
    document.getElementById("expand").innerHTML = "<button onclick='ex()'>Expand</button>";
}
function ex() {
    let out = document.getElementById("out");
    let table = "<table style='width:500px'>";
    let num1, num2, awns;

    for (num1 = 1; num1 <= 19; num1++) {
        table += "<tr>";

        for (num2 = 1; num2 <= 19; num2++) {
            awns = num1 * num2;
            if (awns > 100) {
                table += "<td style='background-color: #777;'>"+ awns +"</td>";
            }
            else {
            table += "<td>"+ awns +"</td>";
            }
        }
        table += "</tr>"
    }
    table += "</table>"

    out.innerHTML = table;
    document.getElementById("expand").innerHTML = "<button onclick='sub()'>Hide</button>"; 
}