function sumar (numero1, numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number" ) {
        return "Che, me tenés que pasar un número"
    }
    return numero1 + numero2
}

console.log(typeof true)

module.exports = sumar
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof
Yo lo arme asi 
if(num1 != 0 && num2 != 0){
        return num1 / num2;
    } else {
        return "No se puede dividir por cero";
    }
// for (let index = 0; index < tareasParseadas.length ; index++){
    console.log("Tarea " + tareasParseadas[index].titulo)
}

let i = 6
console.log("While")
while (i < tareasParseadas.length) {
    console.log("Tarea " + tareasParseadas[i].titulo)
    i++
}

console.log("Do While")

do {
    console.log("Tarea ")
    i++
} while (i < tareasParseadas.length)
