const lahetaButton = document.querySelector('#laheta');
const pisteTuloste = document.querySelector('#pisteet');
var kys1 = document.querySelector('#kys1');
var kys2 = document.querySelector('#kys2');
var kys3 = document.querySelector('#kys3');
var kys4 = document.querySelector('#kys4');
var kys5 = document.querySelector('#kys5');

function laske(k1,k2,k3,k4,k5){
    var pisteet = 0;
    if(k1 == '5.15'){
        pisteet = pisteet + 1;
        document.getElementById("kys1").style.backgroundColor = "green";
    } else{
        document.getElementById("kys1").style.backgroundColor = "red";
    }
    if(k2 == '53'){
        pisteet = pisteet + 1;
        document.getElementById("kys2").style.backgroundColor = "green";
    } else{
        document.getElementById("kys2").style.backgroundColor = "red";
    }
    if(k3 == '4'){
        pisteet = pisteet + 1;
        document.getElementById("kys3").style.backgroundColor = "green";
    } else{
        document.getElementById("kys3").style.backgroundColor = "red";
    }
    if(k4 == '12'){
        pisteet = pisteet + 1;
        document.getElementById("kys4").style.backgroundColor = "green";
    } else{
        document.getElementById("kys4").style.backgroundColor = "red";
    }
    if(k5 == '2'){
        pisteet = pisteet + 1;
        document.getElementById("kys5").style.backgroundColor = "green";
    } else{
        document.getElementById("kys5").style.backgroundColor = "red";
    }
    return pisteet;
}

function tuloste(){
    let k1 = kys1.value;
    let k2 = kys2.value;
    let k3 = kys3.value;
    let k4 = kys4.value;
    let k5 = kys5.value;
    pisteTuloste.textContent = laske(k1,k2,k3,k4,k5);
}
lahetaButton.addEventListener('click', tuloste);