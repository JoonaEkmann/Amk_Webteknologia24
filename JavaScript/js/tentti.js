window.onload = function () {
    document.getElementById("pizzaMäärä").value = 1;
}

function plusPizza() {
    let pizzaMäärä = document.getElementById("pizzaMäärä").value;
    document.getElementById('pizzaMäärä').value = (parseInt(pizzaMäärä) + 1);
}


function minusPizza() {
    let pizzaMäärä = document.getElementById("pizzaMäärä").value;
    document.getElementById('pizzaMäärä').value = (parseInt(pizzaMäärä) - 1);
}


function tilausSumma() {
    let result = 0;
    let pizzaMäärä = (document.getElementById('pizzaMäärä').value);
    let pizzat = document.getElementById('pizzat').value;

    //pizzat
    if (pizzat == 'Tropicana') {
        result = result + (10 * pizzaMäärä);
    }
    else if (pizzat == 'Perfetta') {
        result = result + (12 * pizzaMäärä);
    }
    else if (pizzat == 'Pepperoni') {
        result = result + (13 * pizzaMäärä);
    }

    //Extrat
    if (document.getElementById('valkosipuliCheck').checked) {
        result = result + (1 * pizzaMäärä);
    }
    if (document.getElementById('oreganoCheck').checked) {
        result = result + (1 * pizzaMäärä);
    }
    if (document.getElementById('aurajuustoCheck').checked) {
        result = result + (1 * pizzaMäärä);
    }

    //kanta-asiakkuus
    if (document.getElementById('kanta-asiakkuus').checked) {
        result = result * 0.9;
    }

    document.getElementById('result').value = result.toFixed(2);
}
setInterval(tilausSumma, 1000);

function tilaa() {
    document.getElementById('result').value = 0;
    document.getElementById('pizzaMäärä').value = 1;
    document.getElementById('pizzat').value = 'Tropicana';
    document.getElementById('valkosipuliCheck').checked = false;
    document.getElementById('oreganoCheck').checked = false;
    document.getElementById('aurajuustoCheck').checked = false;
    document.getElementById('kanta-asiakkuus').checked = false;
}