function criaBoard(columns, lines) {
  const board = document.querySelector('#pixel-board');
  for (let i = 0; i < columns; i += 1) {
    const pixelColumn = document.createElement('tr');
    board.appendChild(pixelColumn);
    for (let j = 0; j < lines; j += 1) {
      const pixelLine = document.createElement('td');
      pixelLine.className = 'pixel';
      pixelColumn.appendChild(pixelLine);
    }
  }
}
criaBoard(5, 5);

function inicialSelected() {
  const color1 = document.querySelector('#colorBlack');
  color1.classList.add('selected');
}
inicialSelected();
