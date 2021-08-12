let disc = require('./discs.js')
const alphabet = 'abcdefghijklmnopqrstuvwxyz '
//const disc = require('./discs.js')

const fastRotor = function (number,message){
    let encrypted = ''

    for (let i = 0; i < message.length; i++){
            encrypted += disc(number)[alphabet.indexOf(message[i])]
    }
    return encrypted
}
console.log(fastRotor('I','ola meu nome e leonardo'))