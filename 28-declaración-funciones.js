/**
 * FUNCIONES:
 * - Son bloques de código que se ejecutan con un fin especifico
 */




function saludo(nombre)  //le pasamos los parámetros
{
  console.log(`Hola ${nombre}`);
}

//saludo("Guido");

//definiendo la funcion en una constante
const nom ="Guido"
//Guardando el valor de la constante
saludo(nom);



//FUNCIÓN 2


let nombre_2 = "Jorge"
console.log(nombre_2)  //Jorge

despedir(nombre_2)
console.log(nombre_2) //Jorge

function despedir(nombre) {
    nombre = "Daniel"
    console.log(`Adiós ${nombre}`) //Adiós Daniel
}

//FUNCIÓN 3 CON OBJETOS


let persona = { nombre: "Manuel", apellido: "Rodriguez" }
console.log(persona);

//llamado a la función saludar persona
saludarPersona(persona)

//OJO: NOS ESTA CAMBIANDO LA FUNCIÓN ORIGINAL

console.log(persona)  //{nombre: 'Manuel' Apellido: 'Martinez'}

function saludarPersona(objeto) {
    objeto.apellido = "Martinez"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`) //Hola Manuel Martinez
}

saludar();


// FUNCIÓN 4 CON NÚMEROS

function imprimeNumero(numero = 7) { // Parámetros por defecto
    console.log(numero)  //7
}

imprimeNumero()   //si le paso un numero específico me va a retornan ese número




//FUNCIÓN 5 

// IMPORTANTE: DEFINIENDO FUNCIÓN CON PARAMETROS INDETERMINADOS CON EL FACTOR DE PROPAGACIÓN

function imprimir(...parametros) {
    console.log(parametros)  //[2, 5, 8, 3, 'Hola', { id: 4 }]
}

imprimir(2, 5, 8, 3, "hola", { id: 4 })


//FUNCIÓN 6  (SUMA)

function suma(...nums) {
    return nums.reduce((a, b) => a + b)   // EL RETURN DEVUELVE LA SUMA Y SE IMPRIME POR CONSOLA
}

const s = suma(2,4,6,2,3)

console.log(s) //17



//FUNCIÓN 7 --  IMPORTANTE: AMBITO DE FUNCIONES

let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable) //hola
    let variable_interna = "chau"
    console.log(variable_interna) //chau
    return a * b
}


console.log(multiplicar(6,2)) //12
