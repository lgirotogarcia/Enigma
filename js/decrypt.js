const discs = require('./discs.js');
const returnAlphabet = require('./returnAlphabet.js')


const decriptRotor = function (number,criptMessage){
    let decrypted = '';

    for (let i = 0; i < criptMessage.length; i++){

        if (criptMessage[i] === ' '){
            decrypted += ' ';
        }
        else {
            decrypted += discs[0][discs[number].indexOf(criptMessage.toUpperCase()[i])];
        };

        returnAlphabet(number);
    };
    return decrypted;
};




module.exports = decriptRotor;