/* METODOS DE ARRAYS */

//unir dos arrays

const lista1 = ["hola", 2, false, null]
const lista2 = ["adiós", 8, true, undefined]


console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);



// IMPORTANTE: concatenar  listas con factor de propagación (ecmaScript6 nueva forma de concatenar USADO EN TODOS FRAMEWORKS)

console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4);

// ERROR!! mal el concepto del factor de propagación
const lista5 = [lista1, lista2]
console.log(lista5);


