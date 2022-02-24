const discs = require('./discs.js');
// const moveAlphabet = require('./moveAlphabet.js')


const encryptRotor = function (number,message){
    // let encrypted = '';
    // const alphabet = discs[number]
    let result = {
        encrypted: '',
        alphabet: discs[number]
    }

    for (let i = 0; i < message.length; i++) {
        for (let k = 0; k < 1; k++) {

            if (message[i] === ' ') {
                result.encrypted += ' ';
            }
            else {
                result.encrypted += discs[number][discs[0].indexOf(message.toUpperCase()[i])];
                
            };
        }
        
        const moveAlphabet = function(){

            const letter = result.alphabet.splice(0,1);
            
            result.alphabet.splice(result.alphabet.length,0,letter[0]);
            
            return result.alphabet
        } 
    
        moveAlphabet()
    };

    return result
};




module.exports = encryptRotor;
