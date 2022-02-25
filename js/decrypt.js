const discs = require('./discs.js');
const returnAlphabet = require('./returnAlphabet.js')


const decriptRotor = function (number,criptMessage){
    let result = {
        decrypted: '',
        alphabet: discs[number]
    };

    for (let i = 0; i < criptMessage.length; i++){
        
        const returnLetter = function(){
        
            const letter = result.alphabet.splice(result.alphabet.length-1,1);
        
            result.alphabet.splice(0,0,letter[0]);
            
            return result.alphabet;

        }
        
        returnLetter();

        for (let k = 0; k < 1; k++){

            if (criptMessage[i] === ' '){

                result.decrypted += ' ';
            
            }
            else {
            
                result.decrypted += discs[0][discs[number].indexOf(criptMessage.toUpperCase()[i])];
            
            };
        
        }

    };

    return result;

};




module.exports = decriptRotor;