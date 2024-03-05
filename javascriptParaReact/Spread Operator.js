

//Forma tradicional

const array = [1,2,3,4,5];

const array2 = [6,7,8,9,10];

const nuevoArray = array.concat(otroArray);

console.log(nuevoArray)


//Spread Operator / REST parameters

/*forma de aplicarlo: 

const nuevoArray =[...array, ...array2];
console.log(nuevoArray)

*/

/**EJEMPLO EN OBJETOS */

const objeto1 ={
    a: "a",
    b: "b",
    c: "c",

}

const objeto2 ={
    a: "d",
    b: "e",
    c: "f",
    
}

const nuevoObjeto ={...objeto1, ...obj2}

console.log(nuevoObjeto);

/**EJEMPLO EN REACT 
 * AGARRA Y PASA TODAS LA PROPIEDADES
*/

function Component ({id, ...props}){
    return <NuevoComponente key={id} {...props} />
}