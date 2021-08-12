let disc = require('./discs.js')
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '

const slowRotor = function (number,message){
    let encrypted = ''

    for (let i = 0; i < message.length; i++){
            encrypted += disc(number)[alphabet.indexOf(message.toUpperCase()[i])]
    }
    return encrypted
}
console.log(slowRotor('I','ola meu nome eh leonardo'))