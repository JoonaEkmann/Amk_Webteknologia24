window.onload = function () {
    document.getElementById("spinner").style.display = "none";
}


let laskuri = 0;

function laskuriNappi() {
    laskuri++;

    document.getElementById('laskuri').textContent = laskuri;

    document.getElementById("spinner").style.display = "block";
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("spinner").style.display = "none";
            const jokeContainer = document.getElementById('joke-container');
            jokeContainer.textContent = data.value; // Update the content of the div with the joke text

            let item =
                '<div class="accordion" id="accordionExample">' +
                '<div class="accordion-item">' +
                '<h2 class="accordion-header">' +
                '<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">' +
                'Joke: ' + laskuri +
                '</button>' +
                '</h2>' +
                '<div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">' +
                '<div class="accordion-body">' +
                data.value +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="accordion-item">' +
                '<h2 class="accordion-header"></h2>';
            document.getElementById("accordionExample").innerHTML += item;
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        })



}