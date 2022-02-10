const encrypt = require('./encrypt.js');
const text = require('./text.js');
const decrypt = require('./decrypt.js');



const codificar = function(fast, middle, slow, code){
    return encrypt(fast,(encrypt(middle,(encrypt(slow,encrypt(slow, encrypt(middle,encrypt(fast,text(code)))))))));
}
console.log(codificar(1, 5, 4, 'Qualquer coisa'));

const decodificar = function(fast, middle, slow, code){
    return decrypt(fast,(decrypt(middle,(decrypt(slow,decrypt(slow, decrypt(middle,decrypt(fast,text(code)))))))));
}
console.log(decodificar(1, 5, 4, 'FYEQFYUC ILWVE'));




module.exports = codificar, decodificar;