let fastRotor = require('./fastRotor.js');
let middleRotor = require('./middleRotor.js');
let slowRotor = require('./slowRotor.js');

    /* Rotação dos rotores, de modo que o fast gire a cada letra teclada, a cada volta completa (26 vezes) do fast,
    o middle girará uma posição, e após uma volta completa do middle, o slow girará uma posição. */

// for(i = 0; i > slowRotor.length; i++){
//     for(j = 0; j > middleRotor.length; j++){
//         for(k = 0; k > fastRotor.length; k++){

//         };
//     };
// };



let codificar = function(fast, middle, slow, code){
    return slowRotor(slow, middleRotor(middle,fastRotor(fast,code)));
}
console.log(codificar('V', 'IV', 'III', 'dois um'));