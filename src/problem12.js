/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 12
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La diagonal ascendiente debería contener el valor 1 y todos los
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [0, 0, 1],
 *    [0, 1, 0],
 *    [1, 0, 0],
 *   ]
 */


export function problem12Solution() {
  let matrix = [];
  let row = 6;
  let col = 6;
  for(let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      if (i + j === row - 1) {
        matrix[i][j] = 1;
      } else {
        matrix[i][j] = 0;
      }
    }
    }
  return matrix;
}
            
            