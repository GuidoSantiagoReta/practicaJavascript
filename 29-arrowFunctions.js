//ARROW FUNCTIONS

//1- UTILIZANDO UNA FUNCION FLECHA Y MULTIPLICANDO SU VALOR CONUN MAP DENTRO DE UNA FUNCIÓN


const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((valor) => valor * 2) // funcion anonima

console.log(array2) //[2, 10, 12, 4, 14,24, 16,84]

// EJEMPLO DE DECLARACION DE OTRA FUNCIÓN FLECHA

// const dobleDelValor = valor => {
//     return valor * 2
// }


/*
 * Siempre es recomendable inicializar las variables al principio de nuestro script
para luego ser utilizadas en las funciones.
 * 3- TERCERA FUNCIÓN- LAS FUNCIONES FLECHA SOLO SE PUEDE ACCEDER DESPUES 
DE QUE HAYAN SIDO INICIALIZADAS*/
 


const dobleDelValor = valor => valor * 2

console.log(doble(6)) //12
console.log(dobleDelValor(6))//12


const array3 = array.map(dobleDelValor)

console.log(array3) //[2, 10, 12, 4, 14,24, 16,84]

function doble(valor) {
    return valor * 2
}

