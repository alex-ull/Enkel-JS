function sub() {
    let mon = document.getElementById("inn").value.toLowerCase();

    switch (mon) {
        case "januar":
            days = "31"
            break;

        case "februar":
            days = "28 eller 29" 
            break; 

        case "mars":
            days = "31"
            break;  

        case "april":
            days = "30"
            break;   

        case "mai":
            days = "31"
            break;  

        case "juni":
            days = "30"
            break;    

        case "juli":
            days = "31"
            break;  

        case "august":
            days = "31"
            break;  

        case "september":
            days = "30"
            break;        
        case "oktober":
            days = "31"
            break;  

        case "november":
            days = "30"
            break;  

        case "desember":
            days = "31"
            break;
    
        default: days = "inv"
            break;
    }
    if (days == "inv") {
        document.getElementById("out").innerHTML = "Forsikre deg at du har skrive månaden inn korrekt."
    }
    else {
        document.getElementById("out").innerHTML = `Det er ${days} dager i ${mon}.`;
    }
}