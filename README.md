Hello there!
I'm creating my first "big" project, I'm trying to replicate the encrypting machine Enigma in JavaScript.
Maybe I'll try to create an interface in HTML and CSS, but for now is just JavaScript :)

Essa "máquina" ainda não faz o trabalho de decodificar um código codificado nela mesma. Porém ainda farei essa feature.

Descrição dos arquivos (depois traduzo)

enigma.js -> É onde entra o texto e sai o código. É necessário que na chamada da função selecione 3 valores ('I', 'II', 'III', 'IV', 'V') que não podem se repetir, todos entre aspas. Após a seleção deles, deve-se colocar o texto que será codificado, também entre aspas.

discs.js -> É onde é gerenciado o tipo de disco que será usado em cada "rotor" do código.

rotor.js -> O texto inserido no módulo enigma.js é enviado para a função que está nesse módulo, as letras são codificadas de acordo com o "disco" escolhido em enigma.js. Após a codificação, o resultado é recodificado mais duas vezes.

reflector.js -> Funcionará como um "espelho", após a saída do código no módulo slowRotor.js, o código chegará aqui, e fará o caminho de volta até o módulo fastRotor.js. (Talvez eu exclua esse arquivo, porque não precisa necessariamente dele aqui).