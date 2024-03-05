// Clase Persona
class Persona {
    _nombre
    _edad
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años.`)
    }
}

/* Inheritance - Herencia: 
nos permite hacer que un objeto herede los comportamientos de otro, al igual que 
lo harían las características de un ser vivo en la vida real. Además, podemos ir 
añadiendo comportamientos en la línea de herencia para que cada objeto tenga características 
únicas o nuevas */

//extensión de la clase Persona agregando una variable lenguaje
//super: nos permite utilizar el constructor de la clase padre

class Programador extends Persona{
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje
    }

    saludar() { // Override: sobreescribiendo el metodo saludar
        super.saludar()                 
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevoProgramador = new Programador("Juan", 32, "Javascript")
console.log(nuevoProgramador)
nuevoProgramador.saludar()

/* Polimorfismo => muchas formas: las clases en javascript pueden tomar diferentes formas.
 Nos proporciona tratar un objeto como si fuera un objeto de otra clase.*/

/*interfaces: no existen interfaces en javascript como lo es en otros leguajes como JAVA. En typescript si existen las interfaces.

En TypeScript, una interfaz solo contiene la definición de métodos y propiedades, no su implementación. 
Es la funcionalidad de la clase que realiza la conexión entre la interfaz proporcionando la conexión con 
todos los parámetros de la interfaz. */