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
      const tile = document.createElement("div");
      tile.id = `btn-${i}-${j}`;
      tile.className = "tile";
      tile.innerHTML = `${i}${j}`;
      tile.onclick = () => onTileClick(i, j);
      board.appendChild(tile)
    }
  }
  document.body.appendChild(board);
}

createBoard();
