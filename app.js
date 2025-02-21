function Capitalize(str){
    for(let letter of str){
        if(letter >= 'A' && letter <='Z'){
            return letter;
        }
    }
    return null;
}

module.exports = Capitalize;