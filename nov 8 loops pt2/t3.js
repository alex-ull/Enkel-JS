function sub() {
    let out = document.getElementById("out");
    let table = "<table style='width:500px'>";
    let num1, num2, awns;

    for (num1 = 1; num1 <= 10; num1++) {
        table += "<tr>";

        for (num2 = 1; num2 <= 10; num2++) {
            if (num1 == num2) {
                table += "<td style='background-color: crimson;'>***</td>";
                continue;
            }
            awns = num1 * num2;
            table += "<td>"+ awns +"</td>";
        }
        table += "</tr>"
    }
    table += "</table>"

    out.innerHTML = table;
}