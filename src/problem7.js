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
  const fila = 3, columna = 3;
  let matrix = [];
  for (let i = 0; i < fila; i++) {
    let matrixFila = [];
    for (let j = 0; j < columna; j++) {
      if (i === 2) {
        matrixFila.push("1");
      } else {
        matrixFila.push("0");
      }
    }
    matrix.push(matrixFila);
  }
  return matrix;
}
    
    