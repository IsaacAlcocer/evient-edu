/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1 C
 * La función 'problema1Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros.
 * 
 * El objetivo de este ejercicio es que regreses la suma de todos estos
 * numeros usando el método de reduce de las listas.
 *
 */


export function problem1CSolution(numList) {
  const suma = numList.reduce((total, numero) => {
    return total + numero;
  }, 0);
  return suma;
}
