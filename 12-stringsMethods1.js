// metodos mas usados con los strings

//OBTENER LONGITUD DE UN STRING DE CARACTERES

let str = "obteniendo metodos de strings";

console.log(str.length);

// OBTENER PARTES DE CADENAS DE CARACTERES

//slice
let slice_str = str.slice(0, 15);

console.log(slice_str);

//substring
let substring_str =str.substring (0, 15);

console.log(substring_str);

/*substr (deprecated)

let substr_str = str.substr (0, 15);
console.log(substr_str)*/


//(replace)remplazar una parte del contenido de una cadena de texto

let cadena ="El usuario logeado se llama Juan";

console.log(cadena);

console.log(cadena.replace('Juan', 'Raul'));  //reemplazamos el nombre de usuario


//remplazar texto largo, replace (solo reemplaza la primera instancia)

let longer_text = "tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres."
console.log(longer_text.replace('tres', 'diez'));

//utilizando la expresion regular /g (global), remplaza todas las instancias

console.log(longer_text.replace(/tres/g, 'diez'));




