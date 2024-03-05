// Operador value Of() obtener valores numericos a partir de literales

let a = 3;

let b = newNumber(4);  //casting: no se usa mucho

console.log(a);
console.log(b);
console.log (a + b);

console.log (a.valueOf() + b.valueOf()); // suma sin pasarle las variables( obtener valores primimtivos);

let str = new String ("Esto es un string")
console.log(str)
console.log(str.valueOf());

//NaN infinity (IS NOT A NUMBER)

let g = Number("generalmente")
console.log(g);  ///NaN
console.log(isNaN(g));



let numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// Cconvertir los string a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2;

console.log(typeof numero);  ///muestra tipo de dato
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2); // permite convetir string enn unn numero (castear)

//parseInt y parseFloat - convertir valores a enteros y a coma flotante

//ejercicio1

console.log(parseInt(numero))
console.log(parseFloat(numero))

//ejercicio2

let num3 = 4;
console.log(parseInt(num3))
console.log(parseFloat(num3))

// Números hexadecimales (base 16) - se usa para asignación de memoria

//ejercicio 3 convertir numero hexadecimal 

let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));

// Obtener los valores máximo y mínimo en Javascript
let min_precision = Number.EPSILON;  //precision minima entre un numero y el siguiente
let min_valor_JS = Number.MIN_VALUE;
let max_valor_JS = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_JS);
console.log(max_valor_JS);