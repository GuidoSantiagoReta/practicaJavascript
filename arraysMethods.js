
/*METODO PUSH: El método push() agrega uno o más elementos al final de una matriz y devuelve la nueva longitud de la matriz. */


const vegetales = ['papa', 'batata'];
const frutas = ['mandarina', 'banana'];

// combinar la segunda matriz en la primera
vegetales.push(frutas);

console.log(vegetales);

/*LENGTH: propiedad de un objeto que es una instancia de un conjunto de arrays de tipo o devuelve el número de elementos en esa matriz.*/ 
const verduras = ['papa', 'batata', 'cebolla', 'zanahoria'];

console.log(verduras.length);

//ITERANDO SOBRE UN ARRAY

const numbers = [ 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
  
  console.log(numbers);

}

/*forEach()método  que ejecuta una función proporcionada para recorrer cada elemento de la matriz. */
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"


vegetales// funcion para cuando la llamada es exitosa
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos);
}





