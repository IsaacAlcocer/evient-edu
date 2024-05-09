/**
 * 
 * @param number[][] matrix
 * @returns string
 * 
 * Ejercicio 4
 * La función 'problema4Solution' va recibir un parametro llamad 'matrix'.
 * El parametro 'matrix' es un arreglo (o lista) dentro de otro arreglo.
 * En cada celda puede conter un 'Red' o 'Blue'.
 * 
 * El objetivo de este ejercicio es determinar cuando cuando hay de tipo 'Red'
 * y cuando hay de tipo 'Blue'.
 *
 */


export function problem4Solution(matrix) {
    let redCount = 0;
    let blueCount = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 'Red') {
                redCount++;
            } else if (matrix[i][j] === 'Blue') {
                blueCount++;
            }
        }
    }

    return `Red: ${redCount}, Blue: ${blueCount}`;
}