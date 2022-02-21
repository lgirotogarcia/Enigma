const discs = require('./discs.js');



const moveLetter = function(number){
    let alphabet = discs[number];

    let result = alphabet.splice(0,1);
    alphabet.splice(alphabet.length,0,result[0]);

    return alphabet;
}




module.exports = moveLetter;