// Depurando codigo con node desde visual estudio code para saber que va pasando con nuestras variables y funciones
//Añadiendo breakpoints: puntos de ruptura que quisieramos controlar.
/*en la pestaña WATCH dentro del depurador podemos evaluar, monitorizar  variables y expresiones,
 a medida que nuestro programa se vaya ejecutando */


const persona = {
    nombre: "Juan",
    edad:40
}

console.log(persona)

function obtenerDobleEdad(edad) {
    return 2 * edad
}

const dobleEdad = obtenerDobleEdad(persona.edad)

console.log(dobleEdad);



function obtenArray(edad) {
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const numero = edad + i
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}

const array = obtenArray(persona.edad)

console.log(array)