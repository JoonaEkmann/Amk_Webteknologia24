
function lista() {
    document.getElementById('image-container').classList.remove('grid-container');
    document.getElementById('image-container').classList.add('list-container');
}

function ruudukko() {
    document.getElementById('image-container').classList.add('grid-container');
    document.getElementById('image-container').classList.remove('list-container');
}