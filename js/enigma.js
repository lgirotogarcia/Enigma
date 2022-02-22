const encrypt = require('./encrypt.js');
const text = require('./text.js');
const decrypt = require('./decrypt.js');




const enigma = function(fast, middle, slow, code){
    const codificar = function(fast, middle, slow, code){
    const encrypt = encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow, encrypt(middle,encrypt(fast,text(code)))))))
        return encrypt    
    }
    const decodificar = function (fast, middle, slow, code){
    const decrypto = decrypt(fast,decrypt(middle,decrypt(slow,decrypt(slow,decrypt(middle,decrypt(fast,text(code)))))))
    codificar (fast, middle, slow, code)
        return decrypto
    }
    decodificar(fast, middle, slow, code)

    return {codificado:encrypt,
            decodificado: decodificar}
}


console.log(enigma(1, 5, 4, 'a'));




module.exports = enigma;