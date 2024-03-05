//MODULOS: PARTE DE CODIGO QUE SE PUEDE REUTILIZAR EN DIFERENTES PARTEs DE NUESTRO DESARROLLO
//carpeta con un archivo centralizado donde podemos exportar nuestras diferentes funciones

function suma(a, b) {
    return a + b
}

function multiplica(a, b) {
    return a * b
}

function eleva(a, b) {
    return a ** b
}

function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 2; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}
//exportando las funciones para poder llamarlas desde afuera

module.exports = {
    suma,
    multiplica,
    eleva,
    factorial
}

