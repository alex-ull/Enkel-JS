let arr = [1, 2.3, -4, 5.7, -7.2, 13, 59];
let out = document.getElementById("out");
let max = 0;

function sub() {
    for (el of arr) {
        if (el > max) {
           max = el; 
        }
        console.log(max);
    }
    console.log("Maksverdi er:", max);
    out.innerText += `Maks verdi i arrayet er: ${max} \n\n`;

    //
    
    let climb = arr.sort((a, b) => a - b);
    console.log("Stigende rekkefølge er:", climb);
    
    let totop = "";
    for (let i = 0; i < climb.length; i++) {
        totop +=  `${climb[i]}, `;
    }
    out.innerText += `Arrayet i stiggende rekkefølge er: ${totop} \n\n`;

    //

    let decend = arr.reverse(climb);
    console.log("Synkade rekkefølge er:", decend);

    let tobottom = "";
    for (let i = 0; i < climb.length; i++) {
        tobottom +=  `${climb[i]}, `;
    }
    out.innerText += `Arrayet i synkande rekkefølge er: ${tobottom} \n\n`; 

    //
}
function d() {
    
    let extend = arr.push(92);
    console.log(extend);
    out.innerText += `Den nye lenden på arrayet er nå ${extend} elementer \n\n`;
}

function f() {
    let shorten = arr.shift();
    console.log(shorten);
    out.innerText += ``;
}