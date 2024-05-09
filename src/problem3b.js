/**
 * 
 * @param number[] numList
 * @returns number
 * 
 * Ejercicio 1 B
 * La función 'problema3Solution' va recibir un parametro llamad 'numList'.
 * El parametro 'numList' es un arreglo (o lista) de numeros aleatorios.
 * 
 * El objetivo de este ejercicio es encontrar el número más grande regresar
 * ese valor con el return usando MAP.
 *
 */

export function problem3BSolution(numList) {
    let max = 0;
    numList.map(item => {
        if(item > max) {
            max = item;
        }
    })
    return max;
}

