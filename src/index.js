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
  let rowWinners = 0, columnWinners = 0;
  for (let i = 0; i < ROWS; i++) {
    const rowIsWinner = checkIfRowIsWinner(cSymbol, i);
    if (rowIsWinner) {
      rowWinners++;
    }
  }
  for (let j = 0; j < COLUMNS; j++) {
    const columnIsWinner = checkIfColumnIsWinner(cSymbol, j);
    if (columnIsWinner) {
      columnWinners++;
    }
  }

  const isWinner = rowWinners !== 0 || columnWinners !== 0 || checkIfAscDiagonalIsWinner(cSymbol) || checkIfDescDiagonalIsWinner(cSymbol);
  if (isWinner) {
    alert(`${cSymbol} is the Winner!`);
    resetGame();
  }
  
}

function checkIfDescDiagonalIsWinner(cSymbol) {
  let symbolCount = 0;
  for (let i = 0; i < COLUMNS; i++) {
    let tile = document.getElementById(`btn-${i}-${i}`);
    if (cSymbol === tile.innerText) {
      symbolCount++;
    }
  }
  return symbolCount === COLUMNS;
}

function checkIfAscDiagonalIsWinner(cSymbol) {
  let symbolCount = 0;
  for (let i = 0, j = ROWS - 1; i < COLUMNS; i++, j--) {
    let tile = document.getElementById(`btn-${i}-${j}`);
    if (cSymbol === tile.innerText) {
      symbolCount++;
    }
  }
  return symbolCount === COLUMNS;
}

function checkIfColumnIsWinner(cSymbol, column) {
  let symbolCount = 0;
  for (let i = 0; i < ROWS; i++) {
    let tile = document.getElementById(`btn-${i}-${column}`);
    if (cSymbol === tile.innerText) {
      symbolCount++;
    }
  }
  return symbolCount === ROWS;
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
      let tile = document.createElement("div");
      tile.id = `btn-${i}-${j}`;
      tile.className = "tile";
      tile.onclick = () => onTileClick(i, j);
      board.appendChild(tile)
    }
  }
  document.body.appendChild(board);
}

function resetGame() {
  currentSymbol = "X";

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let tile = document.getElementById(`btn-${i}-${j}`);
      tile.innerText = "";
    }
  }
}

createBoard();
