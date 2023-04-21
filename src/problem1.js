/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1
 * La función 'problema1Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros.
 * 
 * El objetivo de este ejercicio es que regreses la suma de todos estos
 * numeros.
 *
 */


export function problem1Solution(numList) {
    let suma = 0;
    for (let i = 0; i < numList.length; i++) {
      suma += numList[i];
    }
    return suma;
}
