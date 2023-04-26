/**
 * 
 * @param number[][] matrix
 * @returns string
 * 
 * Ejercicio 4
 * La función 'problema4Solution' va recibir un parametro llamad 'matrix'.
 * El parametro 'matrix' es un arreglo (o lista) dentro de otro arreglo.
 * En cada celda puede conter un 'Red' o 'Blue'.
 * 
 * El objetivo de este ejercicio es determinar cuando cuando hay de tipo 'Red'
 * y cuando hay de tipo 'Blue'.
 *
 */


export function problem4Solution(matrix) {
  let red = 0, blue = 0;
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i];
    for (let j = 0; j < element.length; j++) {
      const color = element[j];
      if (color === "Red") {
        red = red + 1;
      } else {
          blue = blue + 1;
      }
    }
    console.log(element)
  }
  return `Red: ${red}, Blue: ${blue}`;
}