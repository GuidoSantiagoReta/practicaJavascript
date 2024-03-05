//ESTUCTURAS DE CONTROL

//if...else: EJECUTAR PARTE DE NUESTRO CODIGO SI SE CUMPLE UNA CONDICIÓN U OTRA.

//Sacar plata de cajero automatico
let saldo = 1000;
let efectivo = 500;


if(efectivo < saldo){
 console.log("extraer dinero");
}else{
    console.log("fondo insufieciente");
}

//if else + if else

let nota = 10;

if (nota === 10){
  console.log("Sobresaliente");
} else if (nota === 9){ 
    console.log("muy bien");
} else if (nota === 8){ 
    console.log("bien +");
} else if (nota === 7){ 
    console.log("bien");
} else if (nota === 6){ 
    console.log("regular");
}else if (nota === 5){ 
    console.log("insuficiente");
} else {
    console.log(" Error!!! introduce una nota del 5 al 10");
}

