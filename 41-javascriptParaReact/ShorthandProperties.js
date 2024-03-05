
const nombre = "Jorge";
const edad = 20;
const linkedin = 'https://linkedin.com/in/jorge-rodriguez';


/*OBJETO COMUN EN JAVASCRIPT


const persona = {
    nombre: nombre,
    edad: edad,
    twitter: twitter
} */

/**SHORTANDPROPERTIES: SI TU CLAVE DEL OBJETO ES LA MISMA QUE LA VARIABLE QUE HAS DECLARADO, SE PUEDE AHORRAR 
 * FUNCIONA DE LA MISMA MANERA
 */

const persona = {
    nombre,
    edad,
    twitter,
}

console.log(persona)

/**COMO SE APLICA EN UN COMPONENTE REACT QUE RECIBE PROPS */

function Componente ({initialState, totalCount}){
    const [state, setState] = useState({initialState, totalCount}); // sin necesidad de aplicar clave valor

    
}