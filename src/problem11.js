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
  const fila = 3, columna = 3;
  let matrix = [];
  for (let i = 0; i < fila; i++) {
    let matrixPunto = [];
    for (let j = 0; j < columna; j++) {
      if (i === j) {
        matrixPunto.push("1");
      } else {
          matrixPunto.push("0");
        }
      }
      matrix.push(matrixPunto);
    
  }
return matrix;
}