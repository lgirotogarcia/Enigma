const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js');

const code = function(fast, middle, slow, code){
    
    const encrypto = function (fast, middle, slow, code) {
        
        let encryptRotor = encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow,encrypt(middle,encrypt(fast,code).encrypted).encrypted).encrypted).encrypted).encrypted);        
        
    
        return encryptRotor;
    };
    
    const decrypto = function (fast, middle, slow, code) {
        
        let decrypting = decrypt(fast,decrypt(middle,decrypt(slow,decrypt(slow,decrypt(middle,decrypt(fast,code).decrypted).decrypted).decrypted).decrypted).decrypted);
        
        return decrypting;

    };

    const invertText = function(code) {

        let reverse = '';
    
        for (let i = code.length-1; i >= 0; i--){
            
            reverse += code[i];
        
        };

        return reverse;
    }

    const encrypted = encrypto(fast, middle, slow, code).encrypted;
    const inverted = invertText(encrypto(fast, middle, slow, code).encrypted)  /* Outra maneira de resolver esse problema de inverter os textos, é inverter os alfabetos, porém, acredito que seja mais dificil*/
    const decrypted = decrypto(fast, middle, slow, inverted).decrypted;
    const finalDecrypt = invertText(decrypted)

    const results = {
        encrypted: encrypted,
        decrypted: finalDecrypt
    };

    return results;
};

console.log(code(1,5,4, 'aaaaaaaaaaaaaaaaaaaaaaaaa'));



module.exports = code;