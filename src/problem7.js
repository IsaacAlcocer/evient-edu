/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 7
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La ultima fila debería contener el valor 1 y todo lo
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [0, 0, 0],
 *    [0, 0, 0],
 *    [1, 1, 1],
 *   ]
 */


export function problem7Solution() {
  let matrix = [];
  let row = 3;
  let col = 3;
  for(let i = 0; i < row; i++) {
    matrix[i] = [];
    if (i === 2) {
      for(let j = 0; j < col; j++) {
      matrix[i][j] = 1;
    }
    }else if(i === 0 || i === 1) {
      for(let j = 0; j < col; j++) {
        matrix[i][j] = 0;
    }
    }
  }
  return matrix;
}
    
    