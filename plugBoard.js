const discs = require("./discs")
const text = require("./text.js")
/* slice para remover as letras das posições originais, e após isso, invertê-las de posição, e usar o slice novamente para adiciona-las ao local*/
const trocarLetra = function (number,letter1,letter2){
    // let letra1 = disc[number].indexOf(letter1)
    // let letra2 = disc[number].indexOf(letter2)
    // let letra3 = letra1

    // letra1 = letra2
    // letra2 = letra3
    // return disc

    const disc = discs[number]
    disc.slice(discs[number].indexOf(letter1),1)
    return disc
}

console.log(trocarLetra(0,'a','b'))