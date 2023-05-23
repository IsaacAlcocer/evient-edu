const ROWS = 3, COLUMNS = 3;

function createCellMatrix(cells) {
    let matrix = new Array(ROWS).fill(new Array(COLUMNS).fill({id: -1, symbol: '', row: -1, column: -1}))
    return cells.reduce((matrix, cell) => {
        let row = [...matrix[cell.row]];
        row.splice(cell.column, 1, cell);
        matrix.splice(cell.row, 1, row);
        return matrix
    }, matrix)
}

export function checkRowsForWinner(cells) {
    const matrix = createCellMatrix(cells);
    const rowWinners = matrix.reduce((winners, row) => {
        const allAreXs = row.every(r => r.symbol === "X");
        if (allAreXs) winners++;
        return winners;
    }, 0);
    return rowWinners > 0;
}