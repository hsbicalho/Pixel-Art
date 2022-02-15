function criaPixel(quant) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < quant; i += 1) {
    const pixel = document.createElement('div');

    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
criaPixel(25);
function inicialSelected() {
  const color1 = document.querySelector('#colorBlack');
  color1.classList.add('selected');
}
inicialSelected();
function setSelected(evento) {
  document.querySelector('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}

document.querySelector('#colorBlack').addEventListener('click', setSelected);
document.querySelector('#colorRed').addEventListener('click', setSelected);
document.querySelector('#colorBlue').addEventListener('click', setSelected);
document.querySelector('#colorGreen').addEventListener('click', setSelected);

function selectedColor() {
  const colorSelected = document.querySelector('.selected');
  return colorSelected.classList[1];
}

function paint() {
  const arrayPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < arrayPixels.length; i += 1) {
    const pixel = arrayPixels[i];
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = `${selectedColor()}`;
    });
  }
}
paint();

function clearPixels() {
  const button = document.querySelector('#clear-board');
  const arrayPixels = document.querySelectorAll('.pixel');
  button.addEventListener('click', () => {
    for (let i = 0; i < arrayPixels.length; i += 1) {
      const pixel = arrayPixels[i];
      pixel.style.backgroundColor = 'white';
    }
  });
}
clearPixels();
