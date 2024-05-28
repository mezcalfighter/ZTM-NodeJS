const arr = [1,2,3,4,5,6,7,8,9,10]

//Map, filter, etc
const even = arr.filter((number)=> number % 2 ===0 )
console.log(even)

//Optional chaining(?.)
const firstStudent = {
    name:"Juani",
    age:29,
    passport:{
        number:222222,
        country:"Mexico"
    }
}

const secondStudent = {
    name:"Emanuel",
    age:2788
}

console.log(firstStudent?.passport?.country)
console.log(secondStudent?.passport?.country)

// Ternary Operator
console.log(secondStudent?.passport?.country ? "Tiene Pasaporte" : "No tiene pasaporte")

//Nullish operator (??)
const age = 20

// Sin nullish operator
const canDrive = age >= 18 ? true : false

// Con nulish operator
const canDrive2 = age >= 18 ?? false

console.log(canDrive)
console.log(canDrive2)

// Maps / Diccionarios
const dictionary = new Map()
dictionary.set("name", "Emanuel")
dictionary.set("age",27)
dictionary.set("isStudent",true)

console.log(dictionary.get("name"))

// Objeto 
const obj = {
    name: "Emanuel",
    age:27
}

console.log(obj.name)

// For each and map
const numbers = [1,2,3,4,5,6,7,8]
const numbers2 = [2,4,6,8,9]
const newNumbers = numbers.map((number)=> number*2)
console.log(newNumbers)

let evenNumbers = true
evenNumbers = numbers2.forEach((number) => {
    if(number%2 !== 0){
        console.log(number, "is not even")
    }
})

/**
 * Prototipos: Es una plantilla de la cual se heredan propiedades
 *             y  metodos para otros objetos. Los prototipos se utilizan
 *             para compartir propiedades y metodos comunes entre varios
 *             objetos y simplificar la reutilizacion de codigo
 */

function Persona(nombre){
    this.nombre = nombre
}

Persona.prototype.saludar = function(){
    console.log("Hola, mi nombre es " + this.nombre)
}

const alice = new Persona("Alice")
alice.saludar()

