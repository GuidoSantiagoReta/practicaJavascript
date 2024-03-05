
//OBTENER UNA LISTA A PARTIR DE OTRO LISTA CON METODO: slice() porción

const array = ["hola", 1, 2, 3, true, null, "adios"];



// EL METODO SLICE NO MODIFICA EL VALOR DEL ARRAY ORIGINAL
console.log(array.slice(1, 4))  //obtener hasta el indice 3

const array2 = array.slice(2, 5)   //obtener hasta el indice 3

console.log(array2)

//utilizando valores negativos

const array3 = array.slice(2, -2)
console.log(array3);
