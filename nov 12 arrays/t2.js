let num = [34,53,2,-3,34,26,-26,85,3,4,98,2,-12];
let out = document.getElementById("out");

function sub1() {
    let awns = "";
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        console.log(sum);
        
    }
    awns = `Summen at tallene i listen er ${sum}`;
    out.innerText = awns;
}
function sub2() {
    let awns = "";
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        if (num[i] < 0) {
           sum += 1;
           console.log(sum); 
        }
    }
    awns = `Det er ${sum} negative tall i listen`;
    out.innerText = awns;
}
function sub3() {
    let awns = "";
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
        console.log(sum);
    }
    

    awns = `Gjennomsnittet av dei ${num.length} tallene er ${(sum/num.length).toFixed(2)}`;
    out.innerText = awns;
}