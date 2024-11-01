let val1 = 0 
let sum = 0

function sub() {
    let num = Number (document.getElementById("inn").value);
    sum = sum + num

    val1 ++
    console.log(sum);
    let val2 = sum/val1
    
    document.getElementById("out1").innerHTML += '<li class="add">' + num + '</li>';
    document.getElementById("out2").innerHTML = `Gjennomsnittet av dei ${val1} tallene er ${val2.toFixed(2)}`;
    
    document.getElementById("inn").value = "";
    document.getElementById("inn").focus();
}