function sub() {
    let val1 = Number (document.getElementById("inn1").value);
    let val2 = Number (document.getElementById("inn2").value);
    let awns = document.getElementById("out");

    awns.innerHTML = comp(val1, val2);
}

function comp(num1, num2) {

    if (num1 > num2) {
        return `${num1} er større enn ${num2}`;
    }
    else if (num1 < num2) {
        return `${num2} er større enn ${num1}`;
    }
    else {
        return `Begge talla er like store`;
    }
}