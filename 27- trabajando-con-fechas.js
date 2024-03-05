
//trabajando con fechas
const fecha = new Date()

console.log(fecha)

// Atención - Los meses inicializan en 0 (0 - Enero, 11 - Diciembre)
const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192)

console.log(fecha2)

//inicializar fechas a traves de milisegundos

const fecha3 = new Date(-10000000000000) // Milisegundos
console.log(fecha3)

//definir fechas a traves de strings

const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4)


// comparar fechas 

console.log(fecha < fecha2)



const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192)
console.log(fecha5)


console.log(fecha2 === fecha5) // ERROR - No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // OK - Esta es la forma de comparar la igualdad entre fechas

/////// Obtener el día, el mes y el año de una fecha
// Obtener el día .getDate()
console.log(fecha2.getDate())

// Obtener el mes .getMonth() (0 - Enero, 11 - Diciembre)
console.log(fecha2.getMonth() + 1)

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocaleDateString   METODO PARA MOSTRAR UNA FECHA EN UN STRING

console.log(fecha2.toLocaleDateString("en-US"))  //11/20/1987

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString PAGINA PARA VER COMO ES LA DISPOSICION DE LA  FECHA EN OTROS PAISES