import './style.css';

const COLUMNS = 3, ROWS = 3;
let currentSymbol = "X"

function onTileClick(col, row) {
  let tile = document.getElementById(`btn-${col}-${row}`)
  tile.innerText = currentSymbol;
  changeSymbol();
  winnerAlert();
}

function changeSymbol() {
  if (currentSymbol === "X") currentSymbol = "O";
  else currentSymbol = "X";
}

function createBoard(cells) {
  const board = document.createElement("div");
  board.className = "board-container";
  for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
      const symbol = getCellSymbol(cells, i, j)
      const tile = document.createElement("div");
      tile.id = `btn-${i}-${j}`;
      tile.className = "tile";
      tile.innerText = symbol;
      tile.onclick = () => onTileClick(i, j);
      board.appendChild(tile)
    }
  }
  document.body.appendChild(board);
}

function getCellSymbol(cells, row, column) {
  const symbol = cells.find(c => c.row === row && c.column === column)
  return symbol?.symbol ?? "";
}

function winnerAlert() {
  for (let i = 0; i < COLUMNS; i++) {
    for (let j = 0; j < ROWS; j++) {
      let tile = document.getElementById(`btn-${i}-${j}`)
      console.log(i,j,tile.innerText)
    }
  }
}

function getData() {
  fetch('http://localhost:8000/matches/1/')
    .then(response => response.json())
    .then(data => {
      console.info({data})
      createBoard(data.data.cells)
    })
}

getData();
