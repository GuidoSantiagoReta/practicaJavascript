//COMPARADOR LOGICO

/*IGUALDAD   == igualdad general  === igualdad estricta*/

if(10 == 10){
 console.log("10 es igual a 10");
}

if (10 === 10){
    console.log("10 es igual a 10 en forma estricta ")
}

let a = 10;
let b = "5";

//igualdad debil: solo compara el valor
if(a == b ){
    console.log("igualdad debil");
}

//igualdad fuerte: compara el valor y el tipo de dato
if (a === b){
    console.log("igualdad fuerte")

}

//COMAPARADOR DE DESIGUALDAD

let x = 6;
let y = "6";

/*diferentes en valor*/
if(x != y){
  console.log(" x no es igual a y")
}

/*diferentes en valor o en tipo de dato */
if( x !== y){

}

//COMPARADOR MAYOR QUE Y MENOR QUE

let min = 6;
let max = 10;

if (max > min){
    console.log("valor correcto");
}

if(max >= 10){
    console.log("max es mayor o igual");
}

//COMPARADOR MENOR QUE O MENOR O IGUAL QUE

if (min < max){
    console.log("valor correcto")
}

if (min <= max){
    console.log("min es menor o igual");
}

