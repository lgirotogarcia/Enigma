const disc = [
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    ['E','K','M','F','L','G','D','Q','V','Z','N','T','O','W','Y','H','X','U','S','P','A','I','B','R','C','J'],
    ['A','J','D','K','S','I','R','U','X','B','L','H','W','T','M','C','Q','G','Z','N','P','Y','F','V','O','E'],
    ['B','D','F','H','J','L','C','P','R','T','X','V','Z','N','Y','E','I','W','G','A','K','M','U','S','Q','O'],
    ['E','S','O','V','P','Z','J','A','Y','Q','U','I','R','H','X','L','N','F','T','G','K','D','C','M','W','B'],
    ['V','Z','B','R','G','I','T','Y','U','P','S','D','N','H','L','X','A','W','M','J','Q','O','F','E','C','K']
];

const ideia = function (number, message){
    let test = '';

    for (let i = 0; i < message.length; i++) {
        
        if (message[i] === ' ') {
            test +=' ';
        }
        else if (message[i] !== ' ') {
            test += disc[number][disc[0].indexOf(message.toUpperCase()[i])];
        };       
    }
    console.log(test);
};


ideia(1,'a');
// Agora os "rotores" podem rodar sem quebrar os espaços.
// Se colocar ao final da função "return disc", ao "rotacionar" o alfabeto, a variável disc é alterada daquela maneira? Para que se possa usá-la como "base" para decriptar?/



for(i = 0; i > disc[slowRotor].length; i++){

    for(j = 0; j > disc[middleRotor].length; j++){
    
        for(k = 0; k > disc[fastRotor].length; k++){
           
            const alphabet = disc[fastRotor]

            const result = alphabet.splice(0,1);
        
            alphabet.splice(alphabet.length,0,result[0]);
        
            return alphabet;
            
        };
           
        const alphabet = disc[middleRotor]

        const result = alphabet.splice(0,1);
    
        alphabet.splice(alphabet.length,0,result[0]);
    
        return alphabet;
        
    };
           
    const alphabet = disc[slowRotor]

    const result = alphabet.splice(0,1);

    alphabet.splice(alphabet.length,0,result[0]);

    return alphabet;
    
};
/* Rotação dos rotores, de modo que o fast gire a cada letra teclada, a cada volta completa (26 vezes) do fast,
    o middle girará uma posição, e após uma volta completa do middle, o slow girará uma posição. */
