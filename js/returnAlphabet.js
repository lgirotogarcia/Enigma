const discs = require('./discs')
const moveAlphabet = require('./moveAlphabet')


const returnLetter = function(number){
    const alphabet = discs[number];

    const result = alphabet.splice(alphabet.length-1,1);

    alphabet.splice(0,0,result[0]);
    
    return alphabet;
}

//Preciso usar nessa função o resultado dos alfabetos gerados na função moveAlphabet


module.exports = returnLetter;