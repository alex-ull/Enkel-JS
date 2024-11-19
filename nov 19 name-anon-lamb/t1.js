let integer = [];
let decimal = [];
//let cat = [Poppy, Bella, Charlie, Felix, Pumpkin, Smuge, Max, Buster, Scuttlebutt, Jigglypuff];

function a() {
    for (let i = 0; i < 15; i++) {
        let num = Math.floor(Math.random()* 100)
        integer.push(num);
    }
    console.log(integer);
    integer.forEach(tall => {print(tall)});
}

function b() {
    
}


function print(num) {
    document.getElementById("out").innerHTML += `${num}, `;
}





