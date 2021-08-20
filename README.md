Hello there!
I'm creating my first "big" project, I'm trying to replicate the encrypting machine Enigma in JavaScript.
Maybe I'll try to create an interface in HTML and CSS, but for now is just JavaScript :)

Essa "máquina" ainda não faz o trabalho de decodificar um código codificado nela mesma. Porém ainda farei essa feature.

Descrição dos arquivos (depois traduzo)

enigma.js -> É onde entra o texto e sai o código. É necessário que na chamada da função selecione 3 valores ('I', 'II', 'III', 'IV', 'V') que não podem se repetir, todos entre aspas. Após a seleção deles, deve-se colocar o texto que será codificado, também entre aspas.

discs.js -> É onde é gerenciado o tipo de disco que será usado em cada "rotor" do código.

rotor.js -> O texto inserido no módulo enigma.js é enviado para a função que está nesse módulo, as letras são codificadas de acordo com o "disco" escolhido em enigma.js. Após a codificação, o resultado é recodificado mais duas vezes.

plugBoard.js -> Função responsável por alterar a posição de 3 pares de letras, como por exemplo A e H, em que todas as vezes que for computado a letra A, ela será automáticamente alterada para H, e vice e versa.

decript.js -> O código inserido no módulo enigma.js é enviado para a função que está nesse módulo, as letras são decodificadas de acordo com o "disco" escolhido em enigma.js. Após a decodificação, o resultado é redecodificado mais duas vezes.