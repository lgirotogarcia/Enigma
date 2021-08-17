const discs = require("./discs")
const text = require("./text.js")


const inverterTexto = function (number, letter1, letter2){
    const alphabet = discs

    const letra1 = alphabet[number].indexOf(letter1)
    const letra2 = alphabet[number].indexOf(letter2)

    alphabet[number].splice(letra1,1,letter2)
    alphabet[number].splice(letra2,1,letter1)    

    return alphabet[number]
}

console.log(inverterTexto(0,'A','B'))


