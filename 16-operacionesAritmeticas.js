// Operaciones Aritmeticas


let a = 2.5;
let b = 2.3;

//suma(+)
console.log(a + b);
//resta(-)
console.log(a - b);
//multiplicacion(*)

console.log(a * b);
//division (/)
console.log(a / b);

//Representación de numeros en strings
//typeof devuelve el tipo de datos que contiene la variable
//.toString () metodo para convertir a string

console.log(typeof a);
let (a_s) = a.toString;
console.log(typeof a_s);

let c = 3.4;
let d = c * 3;

console.log(d);

//.toFixed() metodo para pasar o limitar cantidad de decimales
console.log(d.toFixed(1));

let e = 1434.82345;
console.log(e.toFixed(2)); //= 1434.82

//.toPrecision () metodo para realizar un redondeo cientifico

console.log (e.toPrecision(4)); // limita el numero de cifras significativas