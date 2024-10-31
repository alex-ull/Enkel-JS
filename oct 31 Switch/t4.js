function send() {
    let h = Number (document.getElementById("height").value);
    let w = Number (document.getElementById("weight").value);

    let bmi = w / (h*h);
    bmi = bmi.toFixed(2)

    if (bmi < 18.5) {
        bmiclass = "Lett undervekt";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        bmiclass = "Normalvekt";
    }
    else if (bmi >= 25 && bmi < 30) {
        bmiclass = "Lett overvekt";
    }
    else if (bmi >= 30) {
        bmiclass = "Fedme";
    }
    
    document.getElementById("out").innerHTML = `Din BMI er ${bmi}. Dette klassifiseres som ${bmiclass}.`;
}