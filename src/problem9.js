/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 9
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La segunda columna debería contener el valor 1 y todos los
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [0, 1, 0],
 *    [0, 1, 0],
 *    [0, 1, 0],
 *   ]
 */


export function problem9Solution() {
  let matrix = [];
  let row = 3;
  let col = 3;
  for(let i = 0; i < row; i++) {
    matrix[i] = [];
    for(let j = 0; j < col; j++) {
      matrix[i][j] = 0;
    }
  }
  for(let k = 0; k < col; k++) {
    if (matrix[k][1] === 0) {
      matrix[k][1] = 1;
    }else {
      return false;
    }
  }
  return matrix;
}
      
      