
/*CREANDO UN OBJETO */


const persona = {
    nombre: "Guido",
    edad: 32,
    isDeveloper: true,
    saludo: function() {
        console.log('Hola')
    }
}

//console.log(persona)
persona.saludo();

/*CREANDO OTRO OBJETO */

const persona2 = {
    nombre: "Juan",
    edad: 22,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

persona2.saludo();


//Función factory: CREAR MAS PERSONAS

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2= creaPersona("Maria", 44, false)