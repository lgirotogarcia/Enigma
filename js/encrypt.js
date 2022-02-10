const discs = require('./discs.js');



const rotor = function (number,message){
    let encrypted = '';

    for (let i = 0; i < message.length; i++){

        if (message[i] === ' ') {
            encrypted += ' ';
        }
        else {
            encrypted += discs[number][discs[0].indexOf(message.toUpperCase()[i])];
        };
    };
    return encrypted;
};




module.exports = rotor;
