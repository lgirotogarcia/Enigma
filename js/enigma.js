const rotor = require('./rotor.js');
const text = require('./text.js');
const decript = require('./decript.js');

    /* Rotação dos rotores, de modo que o fast gire a cada letra teclada, a cada volta completa (26 vezes) do fast,
    o middle girará uma posição, e após uma volta completa do middle, o slow girará uma posição. */

// for(i = 0; i > slowRotor.length; i++){
//     for(j = 0; j > middleRotor.length; j++){
//         for(k = 0; k > fastRotor.length; k++){

//         };
//     };
// };

const codificar = function(fast, middle, slow, code){
    let lala = rotor(fast,(rotor(middle,(rotor(slow,rotor(slow, rotor(middle,rotor(fast,text(code)))))))));
    decode()
    return lala
}
console.log(codificar(1, 5, 4, 'Matheus Leal'));

const decodificar = function(fast, middle, slow, code){
    return decript(fast,(decript(middle,(decript(slow,decript(slow, decript(middle,decript(fast,text(code)))))))));
}
console.log(decodificar(1, 5, 4, 'MEBRUYV QUEQ'));

module.exports = codificar, decodificar;