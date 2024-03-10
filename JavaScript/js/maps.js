let address;
let city;
let place;


console.log("Tämä kirjoitetaan selaimen konsoliin");
window.onload = function () {
    address = "Koulukatu 10"
    city = "Lappeenranta"
    document.getElementById("addressField").value = address;
    document.getElementById("cityField").value = city;
    init();
    doSomethingElse();
}

function myFunction() {
    let address = document.getElementById('addressField').value;
    let city = document.getElementById('cityField').value;
    let place = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    address = document.getElementById("addressField").value;
    let iframeElement = document.getElementById('map-frame');
    iframeElement.src = place;
}

/*
function sayHello(address) {
    // alert("Moro moro " + name + "!");

    address = document.getElementById("addressField").value;
    console.log("osoite kentässä: " + document.getElementById("addressField").value);

}
*/