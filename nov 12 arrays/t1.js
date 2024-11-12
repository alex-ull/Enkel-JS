let num = [34,53,2,3,34,26,26,85,3,4,98,2,12]; 
let out = document.getElementById("out");

function sub1() {
    let awns ="";

    for (let i = 0; i < num.length; i++) {
        awns += `${num[i]}, `;
    }
    out.innerText = awns;
}
function sub2() {
    let awns ="";

    for (let i = (num.length - 1); i >= 0; i--) {
        awns += `${num[i]}, `;
    }
    out.innerText = awns;
}
function sub3() {
    let awns ="";

    for (let i = 0; i < num.length; i = i + 2) {
        awns += `${num[i]}, `;
    }
    out.innerText = awns;
}
function sub4() {
    let awns ="";

    for (let i = 0; i < num.length; i++) {
        if (num[i] < 10) {
            awns += `${num[i]}, `; 
        }
    }
    out.innerText = awns;
}
function sub5() {
    let awns ="";

    for (let i = 0; i < num.length; i++) {
        if (num[i]%2 == 0) {
            awns += `${num[i]}, `; 
        }
    }
    out.innerText = awns;
}
function sub6() {
    let awns ="";
    let sum = 0;
   
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        awns = `Summen av alle talla i listen er ${sum}`;
    }
    out.innerText = awns;
}
function sub7() {
    let awns ="";
    let sum = 0

    for (let i = 0; i < num.length; i++) {
    
    }
    out.innerText = awns;
}
function prime(val) {
    if (val <= 1) {
        return false;
    }
    for (let k = 2; k = Math.sqrt(val); k++) {
        if (val % k === 0) {
            return false;
        }
    }
    return true;
}
