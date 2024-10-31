function sub() {
    let day = document.getElementById("inn").value.slice(0,2)
    let con = document.getElementById("inn").value.slice(3)

    switch (con) {
        case "01":
        case "1" :
            month = "Januar";
            break;

        case "02":
        case "2" :
            month = "Februar";
            break;

        case "03":
        case "3" :
            month = "Mars";
            break;

        case "04":
        case "4" :
            month = "April";
            break;

        case "05":
        case "5" :
            month = "Mai";
            break;

        case "06":
        case "6" :
            month = "Juni";
            break;

        case "07":
        case "7" :
            month = "Juli";
            break;

        case "08":
        case "8" :
            month = "August";
            break;

        case "09":
        case "9" :
            month = "September";
            break;

        case "10":
            month = "Oktober";
            break;

        case "11":
            month = "November";
            break;

        case "12":
            month = "Desember";
            break;
    
        default: month = "na"
            break;
    }
    if (day > 31 || con > 12 || month == "Februar" && day > 29) {
        document.getElementById("out").innerHTML = "Ugyldige verdier";
    }

    else {
        document.getElementById("out").innerHTML = `${day}. ${month}`;
    }
    
}