import './style.css';

const COLUMNS = 3, ROWS = 3;
let currentSymbol = "X"

function onTileClick(col, row) {
  let tile = document.getElementById(`btn-${col}-${row}`)
  tile.innerHTML = currentSymbol;
  checkIfUserIsWinner(currentSymbol);
  changeSymbol();
}

function checkIfUserIsWinner(cSymbol) {
  let rowWinners = 0;
  for (let i = 0; i < ROWS; i++) {
    const rowIsWinner = checkIfRowIsWinner(cSymbol, i);
    if (rowIsWinner) {
      rowWinners++;
    }
  }
  if (rowWinners !== 0) {
    alert(`${cSymbol} is the Winner!`)
  }
  // Are any columns winners?
}

function checkIfRowIsWinner(cSymbol, row) {
  let symbolCount = 0;
  for (let j = 0; j < COLUMNS; j++) {
    let tile = document.getElementById(`btn-${row}-${j}`)
    if (cSymbol === tile.innerText) {
      symbolCount++;
    }
  }
  return symbolCount === COLUMNS;
}

function changeSymbol() {
  if (currentSymbol === "X") currentSymbol = "O";
  else currentSymbol = "X";
}

function createBoard() {
  const board = document.createElement("div");
  board.className = "board-container";

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
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
