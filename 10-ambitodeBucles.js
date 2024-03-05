//Estructuras casos especiales-- break, continue - ámbito de los bucles

let = arr[1,2,3,4,6,7,8,9,10];

for (i=0; i< arr.length; i++){
  console.log(arr[i]);


  //permite al programa saltar a la siguiente iteración del bucle etiquetado en vez del bucle actual
  if(arr[i] === 4){
    continue;
  }

//permite al programa salir de una sentencia etiquetada
  if (arr[i] >  6 ){
    break;
  }
}

//LABELS: Permiten etiquetar los bucles for o while

let unidades = 0;
let decenas = 0;


// Ejercicio: si unidades es igual a diez vuelven a 0 y sale del bucle para que las decenas aumenten
bucleDecenas: while (true) {
  bucleUnidades: while (true) {
    console.log(`El numero es: ${unidades} ${decenas}`);
    unidades = unidades + 1
    if (unidades === 10) {
      unidades = 0;
      break bucleUnidades;
    }
  } decenas = decenas + 1
  if (decenas === 2)
  break bucleDecenas;
}
console.log("no es recomendable utilizar estas forma, pero es una utilidad que permite javascript");