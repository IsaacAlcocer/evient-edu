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
  const fila = 3, columna = 3;
  const matrix = [];

  for (let i = 0; i < fila; i++) {
    const matrixPunto = [];
    for (let j = 0; j < columna; j++) {
      matrixPunto.push("0");
      }
      matrix.push(matrixPunto);
    }

    for (let i = 0, j = matrix.length - 1; i < matrix.length; i++, j--) {
      matrix[i][j] = "1";
    }
return matrix;
}
            
            