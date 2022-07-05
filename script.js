const cores = ['black', 'red', 'blue', 'green'];
const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const classesColorPalette = document.getElementsByClassName('color');
let cor = 'black';

function criaPaletaDeCores() {
  for (let index = 0; index < cores.length; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('color');
    novaDiv.style.backgroundColor = cores[index];
    colorPalette.appendChild(novaDiv);
    if (novaDiv.style.backgroundColor === 'black') {
      novaDiv.classList.add('selected');
    }
  }
}

function criaPixelBoard() {
  for (let index = 0; index < 25; index += 1) {
    const novaDiv = document.createElement('div');
    novaDiv.classList.add('pixel');
    pixelBoard.appendChild(novaDiv);
  }
}

colorPalette.addEventListener('click', (event) => {
  // console.log(event.target.style.backgroundColor);
  // console.log(classesColorPalette[2].style.backgroundColor);
  for (let index = 0; index < classesColorPalette.length; index += 1) {
    classesColorPalette[index].classList = 'color';
    if (event.target.style.backgroundColor === classesColorPalette[index].style.backgroundColor) {
      event.target.classList.add('selected');
      cor = event.target.style.backgroundColor;
    } else {
      classesColorPalette[index].classList.add('color');
      classesColorPalette[index].classList.remove('selected');
    }
  }
});

pixelBoard.addEventListener('click', (event) => {
  const pixel = event.target;
  pixel.style.backgroundColor = cor;
});

criaPaletaDeCores();
criaPixelBoard();
