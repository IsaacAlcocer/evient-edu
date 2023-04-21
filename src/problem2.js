/**
 * 
 * @param num1 number
 * @param num2 number
 * @returns string - "Greater than...", "Lesser than...", "Equal to ..."
 * 
 * Ejercicio 2
 * La función 'problema2Solution' va recibir 2 parametros: num1 y num2.
 * Ambos parametros son numeros aleatorios.
 * 
 * El objetivo de este ejercicio es determinar si num1 es mayor que, menor que o igual
 * a num2.
 * 
 * La función debería regresar un texto indicado el resultado final.
 * 
 * - "[num1] es mayor que [num2]"
 * - "[num1] es menor que [num2]"
 * - "[num1] es igual a [num2]"
 *
 */


export function problem2Solution(num1, num2) {
    if (num1 < num2) {
      return "el primero es menor";
    } else if (num1 > num2) {
      return "el primero es mayor";
    }
    return "son iguales";
}