const encrypt = require('./encrypt.js');
const decrypt = require('./decrypt.js');
const invertText = require('./invertText.js');

const code = function(fast, middle, slow, code){
    
    const encrypto = function (fast, middle, slow, code) {
        
        let encryptRotor = encrypt(fast,encrypt(middle,encrypt(slow,encrypt(slow,encrypt(middle,encrypt(fast,code).encrypted).encrypted).encrypted).encrypted).encrypted);        
        
    
        return encryptRotor;
    };
    
    const decrypto = function (fast, middle, slow, code) {
        
        let decrypting = decrypt(fast,decrypt(middle,decrypt(slow,decrypt(slow,decrypt(middle,decrypt(fast,code).decrypted).decrypted).decrypted).decrypted).decrypted);
        
        return decrypting;

    };



    const encrypted = encrypto(fast, middle, slow, code).encrypted;
    const inverted = invertText(encrypto(fast, middle, slow, code).encrypted);  /* Outra maneira de resolver esse problema de inverter os textos, é inverter os alfabetos, porém, acredito que seja mais dificil*/
    const decrypted = decrypto(fast, middle, slow, inverted).decrypted;
    const finalDecrypt = invertText(decrypted);

    const results = {
        encrypted: encrypted,
        decrypted: finalDecrypt
    };

    return results;
};

console.log(code(3,2,5, 'abababababc'));

const input1 = document.getElementById('first-selection');
const input2 = document.getElementById('second-selection');
const input3 = document.getElementById('third-selection');
const inputText = document.getElementById('text-field');
document.getElementById('button-submit').onclick(console.log(code(input1.value,input2.value,input3.value,inputText.value)));

module.exports = code;