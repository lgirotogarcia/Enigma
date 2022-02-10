const discs = require('./discs.js');

const decriptRotor = function (number,criptMessage){
    let decrypted = '';

    for (let i = 0; i < criptMessage.length; i++){
            decrypted += discs[0][discs[number].indexOf(criptMessage.toUpperCase()[i])]; //precisa passar a letra do alfabeto Enigma utilizado (number) para o index do alfabeto normal [0]
    };
    return decrypted;
};

module.exports = decriptRotor;