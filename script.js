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

function inicialSelected() {
  const color1 = query('#colorBlack');
  color1.classList.add('selected');
}
inicialSelected();
function setSelected(evento) {
  query('.selected').classList.remove('selected');
  evento.target.classList.add('selected');
}
const color2 = Math.floor(Math.random() * 16777215).toString(16);
query('#colorRed').style.backgroundColor = `#${color2}`;
const color3 = Math.floor(Math.random() * 16777215).toString(16);
query('#colorBlue').style.backgroundColor = `#${color3}`;
const color4 = Math.floor(Math.random() * 16777215).toString(16);
query('#colorGreen').style.backgroundColor = `#${color4}`;

query('#colorBlack').addEventListener('click', setSelected);
query('#colorRed').addEventListener('click', setSelected);
query('#colorBlue').addEventListener('click', setSelected);
query('#colorGreen').addEventListener('click', setSelected);

function selectedColor() {
  const colorSelected = query('.selected'); // ajuda do joão pster aqui!! para conseguir acessar a cor do background https://github.com/tryber/sd-020-b-project-pixels-art/blob/joao-pster-project-pixels-art/script.js
  const cssObject = window.getComputedStyle(colorSelected, null);
  const backgroundgColor = cssObject.getPropertyValue('background-color');
  return backgroundgColor;
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

query('#generate-board').addEventListener('click', () => {
  query('#pixel-board').innerText = '';
  const boardSize = query('#board-size').value;
  if (boardSize === '') return alert('Board inválido!');
  if (boardSize < 5) {
    pixelBoard.style.grid = 'auto-flow / repeat(5, auto)';
    return criaPixel(25);
  }
  if (boardSize > 50) {
    pixelBoard.style.grid = 'auto-flow / repeat(50, auto)';
    return criaPixel(2500);
  }
  const quant = boardSize * boardSize;
  pixelBoard.style.grid = `auto-flow / repeat(${boardSize}, auto)`;
  for (let i = 0; i < quant; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
  paint();
  clearPixels();
});
