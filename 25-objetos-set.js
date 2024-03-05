
/*Sets o conjuntos no ordenado de valores unicos
 *(SON UNA ESPECIE DE LISTAS QUE SE COMPORTAN DE MANERA DIFERENTE) ECMASRIPT6*/

const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array) //creando un nuevo set

console.log(array)
console.log(miSet) //[1, 2, 3, 4, 5, 6, "hola",{id:5}    // no duplica valores


// .add() añade valores al set
miSet.add(9)
console.log(miSet) //[1, 2, 3, 4, 5, 6, 9"hola",{id:5}  
miSet.add(4)
console.log(miSet)



// .delete() elimina valores
miSet.delete("hola")
console.log(miSet)   //[1, 2, 3, 4, 5, 6, 9,{id:5} ] 


// .clear()   limpia o borra la lista
// miSet.clear()
// console.log(miSet)


// .has()  metodo para saber si dentro del set existe algun valor en concreto, similar al metodo includes de arrays
// console.log(array.includes(2))
console.log(miSet.has(40))


// .size indica cuantos valores unicos contiene un set
console.log(miSet.size) // 8


//como hacer una iteracion dentro de un set

miSet.forEach(valor => {
    console.log(valor)     //[1, 2, 3, 4, 5, 6, 9,{id:5} ] 
})

const it_miSet = miSet.values()
console.log(it_miSet)   //[{iterator}]

const ar_miSet = [ ...miSet ]
console.log(ar_miSet[1])    //[2]
