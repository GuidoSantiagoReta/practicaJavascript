// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

/* MAP: permite iterar sobre un arreglo y modificar 
sus elementos utilizando una función callback */

const array = ["La Matanza", "Morón", "La Plata", "San Isidro", "Quilmes"];
//retorna el array sin hacer nada
const valor = array.forEach(val =>{
    console.log(val);
    return 4;
});
console.log(valor);  //undefined


/* Ejercicio: agregar un indice  en cada palabra dentro del array con .map 
en una función de callback obtener valor e incrementar indice */


const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray);


/*---.filter--- nos permite filtrar solo los elementos que deseamos 
(segun ciertos criterios) y devolverlos en un nuevo array.  */

//Ejercicio: con una lista de objetos.

const listaObjetos = [
    { nombre: "Juan", edad: 38 },
    { nombre: "jorge", edad: 33 },
    { nombre: "Miguel", edad: 27 },
    { nombre: "Damian", edad: 22 },
    { nombre: "Joaquin", edad: 29}
]

/*EJERCICIO DE MANERA TRADICIONAL*/

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad > 30) {
//         return true   //para los objetos que quiero pasar
//     } else {
//         return false   //para los objetos que no quiero pasar
//     }
// });

/*EJERCICIO DE MANERA ECMASCRIPT6 */

const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel"); //devuelve la lista sin miguel
console.log(nuevaLista);


/*.reduce: obtener un valor, un objeto a partir de una lista
El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
devolviendo como resultado un único valor.
*/


const valores = [3, 50, 21, 3, 91, 99]

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)