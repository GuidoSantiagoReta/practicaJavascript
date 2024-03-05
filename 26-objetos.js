

// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Jorge",
    apellido: "Rodriguez",
    isDeveloper: false,
    libros_favoritos: ["Los miserables", "El Alquimista"],
    "4-juegos": [1, 2, 3, 4]
}


//acceder a objetos a traves de puntos y corchetes

console.log(obj.id) //4
console.log(obj["4-juegos"]) //[1,2,3,4]

const prop = "isDeveloper"
console.log(obj[prop])  // false //acceder a propiedades a traves de varialbles

const obj2 = obj;
console.log(obj2);      // isDeveloper: false, libros_favoritos: ["Los miserables", "El Alquimista"],"4-juegos": [1, 2, 3, 4]

obj2.nombre = "Fernando"
console.log(obj2.nombre) //Fernando
console.log(obj.nombre)  //Fernando

let val1 = 3
let val2 = val1

val2 = 5
console.log(val1)    //3
console.log(val2)   //5



const obj3 = { ...obj }

console.log(obj.nombre)   //Fernando
console.log(obj3.nombre)  //Fernando

//cambiando direccion de memoria

obj3.nombre = "Guido"

console.log(obj.nombre)  //Fernando
console.log(obj3.nombre)  //Guido


//ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "El Origen", anyo: 2010 },
    { titulo: "Avatar", anyo: 2009 },
    { titulo: "Joker", anyo: 2019 },
    { titulo: "El Caballero oscuro", anyo: 2008},
    { titulo: "Malditos Bastardos", anyo: 2005 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo)   // FUNCIÓN IMPORTANTE PARA ORDENAR LISTAS

console.log(listaPeliculas)   // ordenar la lista por año, de mas antigua a mas nueva