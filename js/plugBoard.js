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

module.exports = inverterTexto


// FAZER UM LOOP EM QUE SE PASSA CADA LETRA DA PALAVRA, QUE QUANDO PASSAR PELAS LETRAS INDICADAS NOS PARAMETROS DA FUNÇÃO, INVERTERÁ ELA DE POSIÇÃO