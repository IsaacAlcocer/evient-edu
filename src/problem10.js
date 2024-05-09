/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 10
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La ultima columna debería contener el valor 1 y todos los
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [0, 0, 1],
 *    [0, 0, 1],
 *    [0, 0, 1],
 *   ]
 */


export function problem10Solution() {
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
    if (matrix[k][2] === 0) {
      matrix[k][2] = 1;
    }else {
      return false;
    }
  }
  return matrix;
}
      
        
        