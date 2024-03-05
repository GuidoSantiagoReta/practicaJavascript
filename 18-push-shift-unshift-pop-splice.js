/* METODOS DE ARRAYS */

// Cómo trabajar con listas (arrays, arreglos, vectores...)
let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice]  => 0, 1, 2, 3, 4, 5, ....
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);


// -> Push - el array va a cambiar de valor (añadir Valores al final)

array.push("final", 30, 90, false);
console.log(array);

// Unshift - introducir Valores al principio 
array.unshift("inicio", 40, 25)
console.log(array)

// Métodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array

const array2 = [1, 3, "hola", false];


// Agrega Valores al final -> Pop
array2.pop();
console.log(array2);

// Agrega Valores al principio -> Shift
array2.shift();
console.log(array2);


// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)

const array3 = [1, 2, 3, 4, 5, 6]


// Eliminar valores .splice( a partir del indicie que le indicamos(2(indice)1(eliminar un valor luego del indice)), numValoresAEliminar)
array3.splice(2, 1);
console.log(array3)

// Añadir valores .splice(indice, 0(no eleminar valores), añadir valor hola)
array3.splice(2, 0, "hola")
console.log(array3)

// Modificar valores .splice(indice, 1, valores)
array3.splice(2, 1, 3)
console.log(array3)