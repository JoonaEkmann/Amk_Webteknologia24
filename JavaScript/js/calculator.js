//Satunnainen luku, kun käynnistää tehtävän
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
document.getElementById('numero1').value = (getRandomInt(11));
document.getElementById('numero2').value = (getRandomInt(11));

//Ensimmäisen luvun + painike
function plusNumber1() {
    let numero1 = document.getElementById("numero1").value;
    document.getElementById('numero1').value = (parseInt(numero1) + 1);
}

//Ensimmäisen luvun - painike
function minusNumber1() {
    let numero1 = document.getElementById("numero1").value;
    document.getElementById('numero1').value = (parseInt(numero1) - 1);
}


//Toisen luvun + painike
function plusNumber2() {
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('numero2').value = (parseInt(numero2) + 1);
}

//Toisen luvun - painike
function minusNumber2() {
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('numero2').value = (parseInt(numero2) - 1);
}

//Laske näppäin ja samalla laskutoimituksien päivitys
let toimituksiaResult = 0;

function calculate() {
    let resultValue = 0;
    let operator = document.getElementById('operator').value;
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;

    if (operator == '+') {
        resultValue = parseInt(numero1) + parseInt(numero2);
    }
    else if (operator == '-') {
        resultValue = Number(numero1) - Number(numero2);
    }
    else if (operator == '*') {
        resultValue = Number(numero1) * Number(numero2);
    }
    else if (operator == '/') {
        resultValue = Number(numero1) / Number(numero2);
    }
    document.getElementById('result').value = resultValue;

    toimituksiaResult++;
    document.getElementById('toimituksiaResult').textContent = toimituksiaResult;

}

