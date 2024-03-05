
/**ACORTADOR DE LA SENTENCIA IF ELSE*/


const coche ={
    marca: "Ford",
    modelo: "Fiesta",
}
/*
let modelo;

if(coche.modelo){
    modelo = coche.modelo;
} else{
    modelo = "X";
}
*/

//ternario
let modelo = coche.modelo ? coche.model : 'X';

modelo;

/**EJEMPLO EN REACT */

function ListaTareas ({tareas}){
    return(

        <>
        {tareas.lenth ?
        (
            <ul>
                {tareas.map}
            </ul>
        ) : ( 
            <div> No hay tareas</div>
        )}
        
        </>
    )
}
