const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const pixelBoard = query('#pixel-board');

function criaPixel(quant) {
  for (let i = 0; i < quant; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}
criaPixel(25);
query('#generate-board').addEventListener('click', () => {
  query('#pixel-board').innerText = '';
  const boardSize = query('#board-size').value;
  const quant = boardSize * boardSize;
  pixelBoard.style.grid = `auto-flow / repeat(${boardSize}, auto)`;
  for (let i = 0; i < quant; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
});

function inicialSelected() {
  const color1 = query('#colorBlack');
  color1.classList.add('selected');
}
inicialSelected();
function setSelected(evento) {
  query('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}

query('#colorBlack').addEventListener('click', setSelected);
query('#colorRed').addEventListener('click', setSelected);
query('#colorBlue').addEventListener('click', setSelected);
query('#colorGreen').addEventListener('click', setSelected);

function selectedColor() {
  const colorSelected = query('.selected');
  return colorSelected.classList[1];
}

function paint() {
  const arrayPixels = queryAll('.pixel');
  for (let i = 0; i < arrayPixels.length; i += 1) {
    const pixel = arrayPixels[i];
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = `${selectedColor()}`;
    });
  }
}
paint();

function clearPixels() {
  const button = query('#clear-board');
  const arrayPixels = queryAll('.pixel');
  button.addEventListener('click', () => {
    for (let i = 0; i < arrayPixels.length; i += 1) {
      const pixel = arrayPixels[i];
      pixel.style.backgroundColor = 'white';
    }
  });
}
clearPixels();
