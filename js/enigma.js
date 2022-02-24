const encrypt = require('./encrypt.js');
const text = require('./text.js');
const decrypt = require('./decrypt.js');



const code = function(fast, middle, slow, code){
    
    
    const encrypto = function (fast, middle, slow, code) {
        
        let encryptRotor = encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow,encrypt(middle,encrypt(fast,code))))));        
        
    
        return encryptRotor;
    };
    
    const decrypto = function (fast, middle, slow, code) {
        
        let decrypting = decrypt(fast,decrypt(middle,decrypt(slow,decrypt(slow,decrypt(middle,decrypt(fast,code))))));
        
        return decrypting;
    }
    
    const encrypted = encrypto(fast, middle, slow, code)
    const decrypted = decrypto(fast, middle,slow, encrypted)
    
    const results = {
        encrypted: encrypted,
        decrypted: decrypted
    };

    return results
};

console.log(code(1,5,4, 'aaa'));



module.exports = code;