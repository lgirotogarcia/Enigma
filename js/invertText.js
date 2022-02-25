const invertText = function(code) {

    let reverse = '';

    for (let i = code.length-1; i >= 0; i--){
        
        reverse += code[i];
    
    };

    return reverse;
};

module.exports = invertText