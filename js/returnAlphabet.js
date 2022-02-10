const discs = require('./discs')



const returnLetter = function(number){
    const alphabet = discs[number];

    const result = alphabet.splice(alphabet.length-1,1);
    alphabet.splice(0,0,result[0]);
    
    return alphabet;
}




module.exports = returnLetter;