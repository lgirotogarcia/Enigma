const discs = require('./discs.js');
const plugBoard = require('./plugBoard.js')

const rotor = function (number,message,letter1,letter2){
    let encrypted = '';

    for (let i = 0; i < message.length; i++){
            encrypted += discs[number][discs[0].indexOf(message.toUpperCase()[i])];
    };
    return encrypted;
};
module.exports = rotor;

// let rotor2 = function (number,message,letter1,letter2){
//     let encrypted = '';

//     for (let i = 0; i < message.length; i++){
//             encrypted += plugBoard(number,letter1,letter2)[discs[0].indexOf(message.toUpperCase()[i])];
//     };
//     return encrypted;
// };
