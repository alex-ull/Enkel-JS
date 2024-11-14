let animal = [
    {
        name: "Vixen",
        birth: 2021,
        mom: "Salem",
        dad: "Ash",
        race: ""
    },
    {
        name: "Patch",
        birth: 2017,
        mom: "Emi",
        dad: "Amber",
        race: ""
    },
    {
        name: "Raven",
        birth: 2018,
        mom: "Oreo",
        dad: "Oscar",
        race: ""
    },
    {
        name: "Cinnamon",
        birth: 2014,
        mom: "Ashley",
        dad: "Pumpkin",
        race: ""
    }, 
    {
        name: "Holly",
        birth: 2023,
        mom: "Domino",
        dad: "Larry",
        race: ""
    }
]

function sub1() {
    console.log(animal);
    let out = "";
    document.getElementById("a").style.backgroundColor = "#555";
    document.getElementById("b", "d").style.backgroundColor = "#333";
    
    for (let i = 0; i < animal.length; i++) {
        out += `${animal[i].name} ble født i ${animal[i].birth}\n`;
    }

    document.getElementById("out").innerText = out;
}

function sub2() {
    console.log(animal);
    let out = "";
    document.getElementById("b").style.backgroundColor = "#555";
    document.getElementById("a", "d").style.backgroundColor = "#333";
    
    for (let i = 0; i < animal.length; i++) {
        out += `${animal[i].name} sin mor heter ${animal[i].mom}, og faren heter ${animal[i].dad}\n`;
    }

    document.getElementById("out").innerText = out;
}

function sub3() {
    console.log(animal);
    let out = "";
    document.getElementById("d").style.backgroundColor = "#555";
    document.getElementById("b", "a").style.backgroundColor = "#333";
    
    for (let i = 0; i < animal.length; i++) {
        out += `${animal[i].name} er nå ${2024 - animal[i].birth} år\n`;
    }

    document.getElementById("out").innerText = out;
}