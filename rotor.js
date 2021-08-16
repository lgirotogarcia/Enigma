let disc = require('./discs.js');

let rotor = function (number,message){
    let encrypted = '';

    for (let i = 0; i < message.length; i++){
            encrypted += disc[number][disc[0].indexOf(message.toUpperCase()[i])];
    };
    return encrypted;
};

module.exports = rotor;
