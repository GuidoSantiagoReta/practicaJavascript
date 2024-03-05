
//declaración de clases e instanciacion
// construtor: mmetodo para crear e inicializar un objeto creado a partir de una clase.
//this: hace referncia al objeto y le asigna lo que le pasamos al atributo

class Persona {
    constructor(nombre, edad, isDeveloper) {
        //atributos
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }
   //metodo
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

//new: en este caso creamos un objeto de la clase persona

const persona_nueva = new Persona("Guido", 32, true);

console.log(persona_nueva);
persona_nueva.saludo();

// 2- instanceof -> similar a typeof pero para clases, forma de inicializar una clase (nos indica que es de tipo objeto )

let numero = 30 // inicializar
console.log(typeof numero) //number


let persona_2 = new Persona("Juan", 32, false) // instanciar
console.log(typeof persona_2)  //object
console.log(persona_2 instanceof Persona); //true

