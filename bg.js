const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imagenum) {
  const image = new Image();
  image.src = `assets/${imagenum + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getImgNumber() {
  number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const imagenumber = getImgNumber();
  paintImage(imagenumber);
}

init();
