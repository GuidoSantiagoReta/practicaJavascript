

/* JAVASCRIPT TRADICIONAL */


function suma (a, b){
    if(a=== undefined || b === undefinded){
        console.log ('tenes que introducir 2 valores')
        return;
    }
    return a + b;
}

suma (3); //NaN

// con parametros por defecto 

function suma (a = 0, b = 0){
    return a + b;
}

suma (3);  // nunca devuelve el error