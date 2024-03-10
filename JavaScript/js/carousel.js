let cars_array = [{ "name": "Bmw e30 M3 🇩🇪", "src": "images/bmw-4754864_1280.jpg" },
{ "name": "Bmw e36 M3 🇩🇪", "src": "images/BMW_M3_450426.jpg" },
{ "name": "Bmw e46 M3 🇩🇪", "src": "images/stance-1713598_1280.jpg" },
{ "name": "Bmw e92 M3 🇩🇪", "src": "images/bmw-4338257_1280.jpg" },
{ "name": "Bmw f80 M3 🇩🇪", "src": "images/BMW_F80_Red_530882_1280x853.jpg" },
{ "name": "Bmw g80 M3 🇩🇪", "src": "images/BMW_M3_593458_.jpg" }];
let index = 0;


window.onload = function () {
    document.getElementById("cardImage").src = cars_array[index].src;
    document.getElementById("cardName").innerHTML = cars_array[index].name;
}

let isPlaying = true;

function pausePlay() {
    if (isPlaying) {
        clearInterval(intervalId);
        document.getElementById("pausePlayButton").innerHTML = "▶";
    } else {
        intervalId = setInterval(showNext, 1500);
        document.getElementById("pausePlayButton").innerHTML = "❚❚";
    }
    isPlaying = !isPlaying;
}
let intervalId = setInterval(showNext, 1500);


function showPrevious() {
    index--;
    if (index < 0) {
        index = cars_array.length - 1;
    }
    document.getElementById("cardImage").src = cars_array[index].src;
    document.getElementById("cardName").innerHTML = cars_array[index].name;
}

function showNext() {
    index++;
    if (index >= cars_array.length) {
        index = 0;
    }
    document.getElementById("cardImage").src = cars_array[index].src;
    document.getElementById("cardName").innerHTML = cars_array[index].name;
}


