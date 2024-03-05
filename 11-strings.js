//STRINGS (CADENAS DE TEXTO)

let str ="Esto es un texto  con comillas dobles en javascript";
let simple = 'Esto es un texto con comillas simples';


console.log(str);
console.log(simple); 

let comillas= "esto es un texto con comillas \"con otro texto seguido\"";
let comillas2= 'esto es un texto con comillas \'con otro texto seguido\"';

//templates backticks
let backticks =` Esto es un string haciendo uso de los backticks`;
console.log(backticks);



//funcionalidad extra de los backticks - introducción de variables
 let nombre = "Juan";
 let saludar = `Hola ${nombre} bienvenido al curso de javascript`;
 console.log(saludar)


 //pantillas HTML

 let plantilla = `
 
 <html> 
  <h2>Usando html dentro de JS</h2>
  <p>Estamos a prendiendo a utilizar basticks dentro de plantillas html creadas en lenguaje javascript</p>
 </html>`
 console.log(plantilla);


 //Empezar a concatenar strings

 let discos =["El Juego o la vida", "super 8", "Rocket to rusia"];

 