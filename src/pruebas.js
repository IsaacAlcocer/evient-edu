import './style.css';

const COLUMNS = 3, ROWS = 3;
let currentSymbol = "X"

function createBoard() {
  const board = document.createElement("div");
  board.className = "board-container";

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++ ) {
      let tile = document.createElement("div");
      tile.id = `btn-${i}-${j}`;
      tile.className = "tile";
      tile.onclick = () => onTileClick(i,j);
      board.appendChild(tile)
   
    }
  }
  document.body.appendChild(board);
}
