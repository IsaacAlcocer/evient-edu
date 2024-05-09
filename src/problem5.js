/**
 * 
 * @returns number[][] matrix
 * 
 * Ejercicio 5
 * 
 * El objetivo de este ejercicio es de crear un matrix
 * (una lista dentro de otra lista) de 3 x 3.
 * La primera fila debería contener el valor 1 y todo lo
 * demás el valor 0.
 *
 */


export function problem5Solution() {
  let matrix = [];
  let row = 3;
  let col = 3;
  for(let i = 0; i < row; i++) {
    matrix[i] = [];
    if (i === 0) {
      for(let j = 0; j < col; j++) {
      matrix[i][j] = 1;
    }
    }else if(i > 0) {
      for(let j = 0; j < col; j++) {
        matrix[i][j] = 0;
    }
    }
  }
  return matrix;
}