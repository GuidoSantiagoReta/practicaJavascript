



// Funciones asíncronas

function miAsinc() {
    // Funcion que hace una llamada a una base de datos externa
    // Puede darnos algún error
}


/* PROMESAS: ADMITE UNA FUNCIÓN EJECUTORA QUE A SU VEZ TIENE QUE TENER DOS PARAMETROS
 * RESOLVE: función que permite resolver algo de manera correcta.
   REJECT: función que ejecuta el error.

*/

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si se encuentra todo correcto 
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta")) /*GESTIONA LO QUE SE ESTA EJECUTANDO DE MANERA CORRECTA */
    .catch(() => console.log("ERROR"))                            /*GESTIONA UN ERROR QUE SE EJECUTE DENTRO DE NUESTRA PROMESA */
    .finally(() => console.log("me ejecuto siempre"))            /**SE EJECUTA SIEMPRE INDEPENDIENTEMENTE SI ES DE MANERA CORRECTA O INCORRECTA*/


    
// async await: OTRA FORMA DE CONSUMIR FUNCIONES ASÍNCRONAS