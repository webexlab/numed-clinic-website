
// SERVICES SLIDER
let services = [
    "Hair & Face Treatment",
    "Plastic Surgery",
    "Laser Hair Removal",
    "Skin Treatment",
    "Dental Services"
];

let sIndex = 0;

function nextService() {
    sIndex = (sIndex + 1) % services.length;
    document.getElementById("serviceBox").innerText = services[sIndex];
}

function prevService() {
    sIndex = (sIndex - 1 + services.length) % services.length;
    document.getElementById("serviceBox").innerText = services[sIndex];
}


// BEFORE AFTER SLIDER
let baImages = ["ba.1.png", "ba.2.png", "ba.3.png"];
let baIndex = 0;

function nextBA() {
    baIndex = (baIndex + 1) % baImages.length;
    document.getElementById("baImg").src = baImages[baIndex];
}

function prevBA() {
    baIndex = (baIndex - 1 + baImages.length) % baImages.length;
    document.getElementById("baImg").src = baImages[baIndex];
}
