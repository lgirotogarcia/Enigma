const discs = require('./discs.js');



const decriptRotor = function (number,criptMessage){
    let decrypted = '';

    for (let i = 0; i < criptMessage.length; i++){
            decrypted += discs[0][discs[number].indexOf(criptMessage.toUpperCase()[i])];
    };
    return decrypted;
};




module.exports = decriptRotor;