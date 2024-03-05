
/*FUNCIONES GENERADORAS LLEVA ASTERISCO*/



// VAMOS A CREAR UN PROGRAMA QUE PERMITA GENERAR UN ID INCREMENTAL Y OBTENER SUS VALORES. CADA VEZ QUE NOSOTROS EJECUTEMOS LA FUNCION SE VAYA INCREMENTANDOEL ID
// YIEDL (ESPECIE DE RETURN QUE ESPER HASTA QUE SE VUELVA A LLAMAR A LA FUNCIÓN)

function* generaId() {
    let id = 0;
    while(true) {
        id++
        if (id === 10) {
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

//GEN: OBJETO GENERADOR QUE SE UTILIZA DE LA SIGUIENTE MANERA

const gen = generaId();
//GEN: OBJETO GENERADOR QUE SE UTILIZA DE LA SIGUIENTE MANERA
// nos devuelve un objeto {} con el coorrespondiente id.
//agregando el value nos devuelve directamente el id en cada uno

console.log(gen.next().value) //1
console.log(gen.next().value) //2
console.log(gen.next().value) //3
console.log(gen.next().value) //4
console.log(gen.next().value) //5
console.log(gen.next().value) //6
console.log(gen.next().value) //7
console.log(gen.next().value) //8
console.log(gen.next().value) //9
console.log(gen.next().value) //10