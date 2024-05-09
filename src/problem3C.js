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
 * ese valor con el return usando el REDUCE.
 *
 */

// se tiene que mejorar la eficiencia 

export function problem3CSolution(numList) {
    const higherNumber = numList.reduce((accumulator, element) => {
        return Math.max(accumulator, element);
      });
    
      // Devolvemos el número más grande encontrado
      return higherNumber;
}

