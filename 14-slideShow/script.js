const images = ['./img/1.jpeg', './img/2.jpeg', './img/3.jpeg', './img/4.jpeg'];
const image = document.getElementById("image");

function load() {
    image.src = images[0];
    image.alt = 0;
}

function next() {
    if (image.alt == images.length -1) {
        image.src = images[0];
        image.alt = 0;
    }
    image.src = images[Number(image.alt) + 1];
    image.alt = Number(image.alt) + 1;
}

function previous() {
    if (image.alt == 0) {
        image.src = images[images.length - 1];
        image.alt = images.length - 1;
    }
    image.src = images[Number(image.alt) - 1];
    image.alt = Number(image.alt) - 1;
}