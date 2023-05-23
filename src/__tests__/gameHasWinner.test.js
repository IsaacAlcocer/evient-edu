import {checkRowsForWinner} from '../gameHasWinner';

const mockCells = [
    {id: 1, symbol: 'X', row: 0, column: 0},
    {id: 2, symbol: 'X', row: 0, column: 1},
    {id: 3, symbol: 'X', row: 0, column: 2},
    {id: 4, symbol: '', row: 1, column: 0},
    {id: 5, symbol: '', row: 1, column: 1},
    {id: 6, symbol: '', row: 1, column: 2},
    {id: 7, symbol: '', row: 2, column: 0},
    {id: 8, symbol: '', row: 2, column: 1},
    {id: 9, symbol: '', row: 2, column: 2},
]

test('A row has a winner', () => {
    expect(checkRowsForWinner(mockCells)).toBe(true);
});