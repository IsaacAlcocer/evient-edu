/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 11
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La diagonal descendiente debería contener el valor 1 y todos los
 * demás el valor 0.
 *
 * Resultado esperado:
 *   [
 *    [1, 0, 0],
 *    [0, 1, 0],
 *    [0, 0, 1],
 *   ]
 */


export function problem11Solution() {
  let matrix = [];
  let row = 3;
  let col = 3;
  for(let i = 0; i < row; i++) {
    matrix[i] = []
    for(let j = 0; j < col; j++) {
      if (i === j) {
        matrix[i][j] = 1;
      }else {
        matrix[i][j] = 0;
      }
    }
  }
  console.info(matrix);
  return matrix;
}