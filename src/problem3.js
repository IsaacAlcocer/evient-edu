/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1
 * La función 'problema3Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros aleatorios.
 * 
 * El objetivo de este ejercicio es encontrar el número más grande regresar
 * ese valor con el return.
 *
 */


export function problem3Solution(numList) {
    if (numList.length === 0) {
        return undefined;
    }

    let max = numList[0];
    for(let i = 1; i < numList.length; i++) {
        if (numList[i] > max) {
            max = numList[i];
        }
    }
    return max
}

