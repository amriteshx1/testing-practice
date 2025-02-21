function capitalize(str){
    for(let char of str){
        if(char >= 'A' && char <='Z'){
            return char;
        }
    }
    return null;
  }
  
  function reverse(str){
    let reverseStr = '';
    for(let i = (str.length - 1); i>= 0; i--){
        reverseStr += str.charAt(i);
    }
    return reverseStr;
  }
  
  module.exports = {capitalize, reverse};