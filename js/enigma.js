const encrypt = require('./encrypt.js');
const text = require('./text.js');
const decrypt = require('./decrypt.js');



const codificar = function(fast, middle, slow, code){
    return {encrypt: encrypt(fast,text(code)), decript: decrypt(fast,encrypt(fast,text(code)))};
}
console.log(codificar(1, 5, 4, 'Leonardo'));




module.exports = codificar;