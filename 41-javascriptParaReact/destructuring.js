

const cuadrado ={
    x: 10,
    y:10,
}

 function calcularArea(cuadrado) {
    return cuadrado.x * cuadrado.y;
}

calcularArea(cuadrado);

/**FORMA DESTRUCTURADA */

function calcularArea(cuadrado) {
    const{x,y} = cuadrado;
    return x * y;
}

/** o tambien  ahorrar una linea mas de codigo*/

function calcularArea({x, y}) {
   
    return x * y;
}

/*APLICADO A REACT 

const Avatar ({username, url}){
    return <img src={url} alt={username} />
}*/