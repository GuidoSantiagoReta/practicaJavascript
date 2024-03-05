
//convertir cadenas de texto a mayusculas o minusculas
// comparacion y conversion de mayusculas a minusculas

let input = "Escorpio"

let db = "escorpio"


console.log( input.toLowerCase() === db.toLowerCase())

//convierte  texto a minusculas
console.log( input.toLowerCase());
//convierte texto a mayusculas
console.log( input.toUpperCase());

//concatenar strings
let str1 = "cadena de texto numero uno.";
let str2 = " cadena de texto numero dos";


//opcion 1
console.log(str1.concat(" ", str2));
//opcion 2
console.log(str1 + " " + str2);
//opcion 3 
console.log(`${str1} ${str2}`);

//eliminar espacios

let str3 = "  Elimininando espacios al inicio y al final de la cadena de texto con el metodo trim (). "


console.log(str3.trimStart().length);

console.log(str3.trim().length);

console.log(str3.trimEnd().length);

//obtener caracter de acuerdo a la posición

let str4 = "Vamos a un caracter del string de acuerdo una posición especifica";
console.log(str4.charAt(3));

//obtener caracter como array de caracteres
console.log(str4.charAt[3]);

//obtener una palabra dentro de una cadena de caracteres

let str5 ="obtener un palabra de la cadena de texto con el metodo indexOf"

console.log(str5.indexOf("metodo"));


// si hay palabras repetidas con el metodo lastIndexOf obtenemos la ultima palabra que se repite y queremos obtener
console.log(str5.lastIndexOf("de"));