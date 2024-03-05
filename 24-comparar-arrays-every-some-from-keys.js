//  comparar listas
// .every() - si todos los componentes del array cumplen con la condicion devuelve true
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

// const resultado = array.every(valor => {
//     if (valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })
const resultado = array.every(valor => valor > 0)

console.log(resultado);

/// Comparacion de listas
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2) //false (las listas no se pueden comparar de esta manera)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false //comparar longitud de los arrays
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2)) //true

const ar3 = [1, 2, 3, 8]

console.log(compararArrays(ar1, ar3)) //false

/*METODOS DE ARRAYS - SOME */

// .some() - si por lo menos un componente del array cumplen con la condicion devuelve true

const array4 = [3, 7, 2, 4, 7, 8, 42, 35, 7865, 23, -2]

const res = array4.some(valor => valor < -0)

console.log(res) //true (hay valores negativos)

const existe = array4.some(valor => valor === 8)  //true

console.log(existe)

/**
 * Ejercicio de arrays utilizando el metodo .some
 */

const listaObjetos = [
    { nombre: "Juan", edad: 35 },
    { nombre: "Ezequiel", edad: 34 },
    { nombre: "Martin", edad: 28 },
    { nombre: "Julieta", edad: 3 },
    { nombre: "Delfina", edad: 29}
]

const existeMartin = listaObjetos.some(persona => persona.nombre === "Martin") 

console.log(existeMartin) //true

/**
 * OBJETOS ITERABLES, SABERLO PERO NO SE UTILIZA MUCHO
 */

// METODO: .from Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Guido"
console.log(str[5]) //acceder a un cierto valor del string como un array

/**para objeto iterable que no sea un array para pasar una forma a otra- importante conocerlo, pero no se utilizamucho*/
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)   //iterator

const ar_keys = Array.from(keys)
console.log(ar_keys)

