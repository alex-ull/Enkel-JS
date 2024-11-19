let duck = [
    {
        fornavn: "Huey",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313123,
            jobb: 313223
        }
    },
    {
        fornavn: "Dewey",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313124,
            jobb: 313224
        }
    },
    {
        fornavn: "Louie",
        etternavn: "Duck",
        alder: 7,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313125,
            jobb: 313225
        }
    },
    {
        fornavn: "Donald",
        etternavn: "Duck",
        alder: 66,
        adresse: {
            gate: "Andeby terasse 3",
            postnr: 313,
            poststed: "Andeby"
        },
        telefonnummer: {
            privat: 313126,
            jobb: 313226
        }
    },
    
];

function init() {
    duck.map(info => {basic(info)});
}

duck.map(info => {basic(info)});

console.log(duck);



function basic(list) {
    let print = "";
    for (let i = 0; i < duck.length; i++){
        print += `<div class="card"><p>${duck[i].fornavn} ${duck[i].etternavn}</p><p>${duck[i].adresse.gate}</p><p>${duck[i].adresse.postnr} ${duck[i].adresse.poststed}</p></div>`;
    };
    document.getElementById("out").innerHTML = print; 
}

function a() {
    duck.filter(filt => {console.log(filt.etternavn == "Duck");})
}
