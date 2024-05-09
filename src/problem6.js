/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 6
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La segunda fila debería contener el valor 1 y todo lo
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [0, 0, 0],
 *    [1, 1, 1],
 *    [0, 0, 0]
 *   ]
 */


export function problem6Solution() {
  let matrix = [];
  let row = 3;
  let col = 3;
  for(let i = 0; i < row; i++) {
    matrix[i] = [];
    if (i === 1) {
      for(let j = 0; j < col; j++) {
      matrix[i][j] = 1;
    }
    }else if(i === 0 || i > 1) {
      for(let j = 0; j < col; j++) {
        matrix[i][j] = 0;
    }
    }
  }
  return matrix;
}
  