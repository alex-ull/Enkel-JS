function sub() {
    let val1 = Number (document.getElementById("val1").value);
    let val2 = Number (document.getElementById("val2").value);

    if (val1 < val2) {
        document.getElementById("out").innerHTML = `${val2} er større enn ${val1}.`;
    } 
    
    else if (val1 > val2) {
        document.getElementById("out").innerHTML = `${val1} er større enn ${val2}.`;
    }

    else {
        document.getElementById("out").innerHTML = `${val1} og ${val2} er like store.`;
    }
}