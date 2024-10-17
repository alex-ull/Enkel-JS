function calculate() {
    let temp = Number (document.getElementById("temp").value);
    let cels = temp;
    let fahr = temp * 9/5 + 32;
    let kelv = temp + 273.15;
    let celsi = `${cels}°C`;
    let fahre = `${fahr}°F`;
    let kelvi = `${kelv}K` ;
    document.getElementById("cel").innerHTML = celsi;
    document.getElementById("fah").innerHTML = fahre;
    document.getElementById("kel").innerHTML = kelvi;
}