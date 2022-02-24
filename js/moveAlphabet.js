const discs = require('./discs.js');


const alphabet = discs[number]

const moveLetter = function(number){

    const result = alphabet.splice(0,1);

    alphabet.splice(alphabet.length,0,result[0]);

    return alphabet;
}




module.exports = moveLetter;