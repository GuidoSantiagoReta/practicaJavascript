//BUCLES

//FOR (inicializacion, condicion, actualizacion)  i= variable contadora

/* i = i+1
   i+= 1
   i++ */


for (let i = 0; i< 10; i++){
   console.log(i);
}

//obtener valores de una lista
let lista = [3, 8, 6, 12, 4, 10];
for (let i = 0; i< lista.length; i++){
 console.log(lista[i]);
}

/*ESTRUCTURA FOR OF*/ 
for (valor of lista){
    console.log(valor);
 }

/*ESTRUCTURA FOREACH*/
lista.forEach(valor  => {
    console.log(valor);
})


/*ESTRUCTURA FOR IN */

let person = {
    name: "juan",
    surname:  "Rodriguez",
    age:32,
    job: "developer",
}
//formas de acceder a las propiedades
for(property in person){
    console.log(property);
    console.log(person.name)
    console.log(person[property]);
}