//----CLASE CON ATRIBUTOS PUBLICOS---
/*
class Persona{
    constructor(nombre,edad){
    this.nombre = nombre
    this.edad  = edad
    } 
  //metodo
   saludar(){
     console.log(`Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`)
   }
}
const persona = new Persona("juan", 38)
console.log(persona) //Persona {nombre: 'juan', edad: 38}
console.log(persona.nombre) //juan
//utilizando el metodo
console.log(persona.saludo) // Hola mi nombre es juan y mi edad es 38   */

//---CLASE CON ATRIBUTOS PRIVADOS Y PROTEGIDOS---

class Persona {
    // Private -> #
    // Private -> Sólo se puede acceder desde dentro de la clase
    #nombre
    #edad
   

    // Protected -> _
    // Protected -> Sólo se puede acceder desde dentro de la clase y desde clases descendientes _isDeveloper(incializa la variable protegida)
    _isDeveloper = true
    constructor(nom, edad) {
        this.#nombre = nom
        this.#edad = edad
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }

    obtenNombre() { // Función getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
        return this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("juan", 38)
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo()
// console.log(persona.obtenNombre())
// console.log(persona.#obtenEdad())
// console.log(persona._isDeveloper)

/*METODOS GETTER Y SETTER: FUNCIONES QUE NOS PERMITE ACCEDER DE FORMA CONTROLADA A ATRIBUTOS PROTEGIDOS*/



// Getter -> métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad) //38

// Setter -> métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15)
console.log(persona.getEdad()) //15