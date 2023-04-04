import './style.css';

const COLUMNS = 3, ROWS = 3;
let currentSymbol = "X"

function onTileClick(col, row) {
  let tile = document.getElementById(`btn-${col}-${row}`)
  tile.innerHTML = currentSymbol;
  changeSymbol();
}

function changeSymbol() {
  if (currentSymbol === "X") currentSymbol = "O";
  else currentSymbol = "X";
}

function createBoard() {
  const board = document.createElement("div");
  board.className = "board-container";

  for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
      // Crear el elemento tipo "div" que se va manipular
      const tile = document.createElement("div");
      // Agregar atributos al elemento
      tile.id = `btn-${i}-${j}`;
      tile.className = "tile";
      tile.innerHTML = `${i}${j}`;
      tile.onclick = () => onTileClick(i, j);
      // Insertar el tile al tablero
      board.appendChild(tile)
    }
  }
  // Insertar tablero al body de la página
  document.body.appendChild(board);
}

// Crear tablero
createBoard();
