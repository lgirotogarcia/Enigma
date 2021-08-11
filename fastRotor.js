// const disc = require('./discs.js')
const alphabet = 'abcdefghijklmnopqrstuvwxyz '
//const disc = require('./discs.js')

const fastRotor = function (number,message){
    let disc = ''
    let encrypted = ''

    if (number === 'I'){
        disc = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ '
    }
    else if (number ==='II'){
        disc = 'AJDKSIRUXBLHWTMCQGZNPYFVOE '
    }
    else if (number === 'III'){
        disc = 'BDFHJLCPRTXVZNYEIWGAKMUSQO '
    }
    else if (number === 'IV'){
        disc = 'ESOVPZJAYQUIRHXLNFTGKDCMWB '
    }
    else if (number === 'V'){
        disc = 'VZBRGITYUPSDNHLXAWMJQOFECK '
    }

    for (let i = 0; i < message.length; i++){
        encrypted += disc[alphabet.indexOf(message[i])]
    }
    return encrypted
}
console.log(fastRotor('I','ola meu nome e leonardo'))