const discs = require('./discs.js');
const plugBoard = require('./plugBoard.js')

let rotor = function (number,message,letter1,letter2){
    let encrypted = '';

    for (let i = 0; i < message.length; i++){
            encrypted += discs[number][discs[0].indexOf(message.toUpperCase()[i])];
    };
    return encrypted;
};
console.log(rotor(1, 'olar','',''))
module.exports = rotor;


let rotor2 = function (number,message,letter1,letter2){
    let encrypted = '';

    for (let i = 0; i < message.length; i++){
            encrypted += plugBoard(number,letter1,letter2)[discs[0].indexOf(message.toUpperCase()[i])];
    };
    return encrypted;
};
console.log(rotor2(1,'olar','A','B'))