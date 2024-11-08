function sub1() {
    let sout = document.getElementById("out1");
    let num = 0;
    let sum = 0;
    let awns = "";

    while (sum <=1238) {
        sum += num;
        awns += `Tall: ${num} --> Sum: ${sum}\n`;
        num++;
    }
    sout.innerText = awns;
    sout.innerText += `\nSiste tallet var ${num -1}`;
}
function sub2() {
    let pout = document.getElementById("out2");
    let num = 0;
    let sum = 0;
    let awns = "";

    while (sum <= 2250) {
        sum += num;
        awns += `Tall: ${num} --> Sum: ${sum}\n`;
        num += 2;
    }
    pout.innerText = awns;
    pout.innerText += `\nTallet som oversteg var ${num -2}`
}