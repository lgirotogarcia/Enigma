const discs = require('./discs.js');
const moveAlphabet = require('./moveAlphabet.js')


const encryptRotor = function (number,message){
    let encrypted = '';
    const alphabet = discs[number]
    
    for (let i = 0; i < message.length; i++){
        
        if (message[i] === ' ') {
            encrypted += ' ';
        }
        else {
            encrypted += discs[number][discs[0].indexOf(message.toUpperCase()[i])];
        };
        
        
        const result = alphabet.splice(0,1);
    
        alphabet.splice(alphabet.length,0,result[0]);
    

    };

    return encrypted;
};




module.exports = encryptRotor;
