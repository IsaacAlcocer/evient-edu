/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1 B
 * La función 'problema1Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros.
 * 
 * El objetivo de este ejercicio es que regreses la suma de todos estos
 * numeros usando el método de map de las listas.
 *
 */


export function problem1BSolution(numList) {
  const sumaNumList = numList.map(function(suma) {
    return suma;
  });
  return sumaNumList;
}