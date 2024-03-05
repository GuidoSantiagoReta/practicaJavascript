/*---ARRAYS---*/

//Forma1 
const list =[ "hi", true, undefined, null];
//forma2
const list2 = new Array( 10, true, undefined, null);
//array de posiciones
const list3 = new Array(3);

//primera posicion
 list4[0]="first element from array";
//arrays dentro de otro array
const list5 =[list, list2, list3];

console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);
console.log(list5);

/*---OBJETO representación de datos en la vida real, donde definimos atributos, etc---*/
const auto ={
    marca: "ford",
    precio:"1.000.000",
    modelo:"2017",
    vendedores: ["Juan", "Jorge", "Rodrigo",]
    
}
//cambiando valores de los atributos del array original
auto.modelo = 2016;

//Accerder a las propiedades del objeto con un punto
console.log(auto.modelo)


/*---FECHAS---*/

 const actual = new Date();

 //imprimir fecha
 console.log(actual);

 //obtener dia, mes y anio 

 const dia =  actual.getDate;
 const mes = actual.getMonth + 1;
 const anio = actual.getFullYear;

 console.log (dia, mes, anio);