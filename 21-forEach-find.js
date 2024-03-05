

// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (más eficiente) .forEach()
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor) //3, 6, 2, 77, 2, 3, 93, 19
})
console.log(suma); // es igual a la suma de los valores del array= 205

// BUSQUEDA DE VALORES CON .FIND

// Búsqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90
//METODO .FIND
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})

console.log(variable); //90

//EJEMPLO CON LISTA DE OBJETOS

const listaObjetos = [
    { nombre: "Juan", edad: 35 },
    { nombre: "jorge", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Damian", edad: 3 },
    { nombre: "Joaquin", edad: 29}
]

//FORMA TRADICIONAL

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Miguel") {
//         return true
//     }
// })

//FORMA ECMASCRIPT6 - Función flecha - construcción de objetos

const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad)  // = 28

//MEJOR FORMA PARA SOLO OBTENER LA EDAD SIN PASAR POR EL OBJETO

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad)    // = 28