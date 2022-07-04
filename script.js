function criaPaletaDeCores() {
  const cores = ['black', 'red', 'blue', 'green'];
  const colorPalette = document.querySelector('#color-palette');
  for (let index = 0; index < cores.length; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('color');
    novaDiv.style.backgroundColor = cores[index];
    colorPalette.appendChild(novaDiv);
  }
}

function criaPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('pixel');
    pixelBoard.appendChild(novaDiv);
  }
}

criaPaletaDeCores();
criaPixelBoard();
