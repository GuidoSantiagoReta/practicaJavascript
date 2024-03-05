

/* --LocalStorage: Formas de acceder--*/

//localStorage.setItem("nombre", "Guido")
//localStorage.setItem("nombre", "Juan")

  /* --LocalStorage: obtener datos--*/

// console.log(localStorage.getItem("nombre"))


/*Guardar objeto */

// localStorage.setItem("persona", JSON.stringify({ nombre: "gorka", edad: 32 }))

// console.log(JSON.parse(localStorage.getItem("persona")))

/* --- Convertir --- */

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript


/* Eliminar un item */

//localStorage.removeItem("nombre")


/* --sessionStorage: Formas de acceder (igual a localStorage)--*/

sessionStorage.setItem("nombre-sesion", "Guido")


/*---Cookies: Forma de acceder--- */


document.cookie = "nombreCookie=GuidoCookie"     //crear Cookie

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023, 0, 1).toUTCString() //darle caducidad a la cookie

console.log(document.cookie)