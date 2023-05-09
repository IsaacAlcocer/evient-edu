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
  const fila = 3, columna = 3;
  let matrix = [];
  for (let i = 0; i < fila; i++) {
    let matrixColumna = []; 
    for (let j = 0; j < columna; j++) {
      if (j === 1) {
        matrixColumna.push("1");
      } else {
        matrixColumna.push("0");
      }
    }     
    matrix.push(matrixColumna);
  } 
  return matrix;
}
      
      