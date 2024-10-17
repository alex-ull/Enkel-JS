function con() {
    let met = Number (document.getElementById("km").value);
    let imp = met / 1.609344;
    document.getElementById("mi").innerHTML = imp;
}