const encrypt = require('./encrypt.js');
const text = require('./text.js');
const decrypt = require('./decrypt.js');



const codificar = function(fast, middle, slow, code){
    return {encrypt: encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow, encrypt(middle,encrypt(fast,text(code))))))),
            decrypt: decrypt(fast,decrypt(middle,decrypt(slow,decrypt(slow,decrypt(middle,decrypt(fast,encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow, encrypt(middle,encrypt(fast,text(code)))))))))))))};
}
console.log(codificar(1, 5, 4, 'Leonardo'));




module.exports = codificar;