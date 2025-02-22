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
  
  function caesarCipher(str, num){
    let shiftedStr = '';
    for(let i = 0; i < str.length; i++){
       let value = str.charCodeAt(i);

       if(value >= 65 && value <= 90){
        value = ((value - 65 + num) % 26) + 65;
       }else if (value >= 97 &&  value <= 122){
        value = ((value - 97 + num) % 26) + 97;
       }

       shiftedStr += String.fromCharCode(value);
    }
    return shiftedStr;
  }

  function analyzeArray(arr){
    let sum = 0;
    let mini = arr[0];
    let maxi = arr[0];

    for(let i=0; i < arr.length; i++){
      sum += arr[i];
      if(arr[i] > maxi){
        maxi = arr[i];
      }
      if (arr[i] < mini){
        mini = arr[i]
      }
    }
    return {avg : sum / arr.length, min : mini, max : maxi, len : arr.length};
  };

  module.exports = {capitalize, reverse, calculator, caesarCipher, analyzeArray};