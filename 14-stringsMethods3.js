//stringsMethods  parte 3 y expresiones regulares (premite buscar instancias, etc)




let longer_text = "tres tristes tigres, tragaban trigo en un trigal, en tres tristes trastos, tragaban trigo tres tristes tigres."


//obtener instancias de una palabra con metodo match, cuantas veces se repite la palabra elegida

console.log(longer_text.match(/tristes/g));


// ver si existe la palabra en el texto con metodo includes
console.log(longer_text.includes("tres"));

// ver si el texto comienza con una cadena de caracteres

console.log(longer_text.startsWith("tres"));


// ver si el texto termina con una palabra especifica o cadena de caracteres

console.log(longer_text.endsWith("tigres."));
