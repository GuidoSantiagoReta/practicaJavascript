

// Carga y sobrecarga de funciones
function saludo() {
    hola()
}


function hola() {
    console.log(" Soy la función hola()")  //Soy la funcion hola
}

saludar()


/*PASOS QUE EJECUTA LA FUNCIÓN PARA OPTIMIZAR LA MEMORIA QUE UTILIZA JS */

/// 1. global()
/// 2. saludar() global()
/// 3. hola() saludar() global()
/// 4. saludar() global()
/// 5. global()



// function recursivo() {
//     recursivo()        //maximum call stack exceeded
// }

// recursivo()