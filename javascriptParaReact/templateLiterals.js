
const nombre = "Juan";
const apellido = " Rodriguez";

console.log (nombre + "" + apellido); //forma tradicional

console.log(`${nombre} ${apellido}`); //ecmasript es6


/* EJEMPLO EN REACT : PASANDO VARIABLES A UN STRING DE FORMA DINAMICA

function Component ({backgroundColor}){
    return ( <div className={`bg-color-${}`}>Hola</div>)
}

*/