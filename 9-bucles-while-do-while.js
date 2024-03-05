//BUCLES WHILE AND DO WHILE



//while: se va a cumplir de acuerdo a la condicion

let i = 0;
let max= 5;

while (i<= 5){
     console.log(i);
     i++;
}

/*do while: crea un bucle que ejecuta una sentencia especificada, hasta que la condición de 
comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, 
dando como resultado que la sentencia especificada se ejecute al menos una vez */

i= 10;

do{
    console.log("bucle do while");
}while (i<max);