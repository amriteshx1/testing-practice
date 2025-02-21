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

  let calculator = {
    add : (a, b) => a + b,
    sub : (a, b) => a - b,
    mul : (a, b) => a * b,
    div : (a, b) => {
        if(b == 0) return undefined;
        return a / b;
    }
  }
  
  module.exports = {capitalize, reverse, calculator};