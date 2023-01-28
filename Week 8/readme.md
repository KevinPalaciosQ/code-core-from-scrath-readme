# Week 8
---
## Monday, January 16💻
---
# Training JS #7: if..else and ternary operator
## Solution
```
function saleHotdogs(n){
    if (n < 5) return n * 100
    else if (n < 10) return n * 95
    else return n * 90
  }  
```
# Training JS #8: conditional statement--switch
## Solution
```
function howManydays(month){
    var days;
    switch (month){
      case 4:
        days = 30;
        break;
      case 6:
        days = 30;
        break;
      case 9:
        days = 30;
        break;
      case 11:
        days = 30;
        break;
      case 2:
        days = 28;
        break;
      default:
        days = 31;
    }
    return days;
  }
```
# Basic calculator
## Solution
```
function calculate(num1, operation, num2) {
    let tot = 0;
   if(operation == '+'){
     return tot = num1+num2
   }else if(operation == '-'){
     return tot = num1-num2
   }
    else if(operation == '*'){
     return tot = num1*num2
   }
    else if(operation == '/'){
     if(num2 == 0){
       return null
     }else{
       return tot = num1/num2
     }
   }else{
     return null;
   }
  }
```
---
## Tuesday, January 17💻
---
# Even or odd
## Solution
```
function evenOrOdd(number) {
    let state;
    if(number %2 ==0 ){
      state = "Even"
      return state
    }else{
      state = "Odd"
      return state
    }
  }
```
# A wolf in sheep's clothing
## Solution
```
function warnTheSheep(queue) {
    const stateWolf = queue.indexOf("wolf");
    if (stateWolf == queue.length - 1)
      return "Pls go away and stop eating my sheep";
    const stateSheep = queue.length - (stateWolf + 1);
    return (
      "Oi! Sheep number " + stateSheep + "! You are about to be eaten by a wolf!"
    );
  }
```
# Decode the morse code
## Solution
```
decodeMorse = function (morseCode) {
    let phrase = [];
    let words = morseCode.trim().split('   ');
    let letters = [];
    for (let i = 0; i < words.length; i++) {
      letters = words[i].split(' ');
      for (let j = 0; j < letters.length; j++) {
        letters[j] = MORSE_CODE[letters[j]];
      }
      phrase.push(letters.join(''));
    }
    return phrase.join(' ').trim();
  };
```
---
## Wednesday, January 18💻
---
# Who likes it?
## Solution
```
names = ["Alex", "Jacob", "Mark", "Max"];
function likes(names) {
  let contador = 0;
  for (let i in names) {
    contador++;
  }
  if (contador == 0) {
    return (message = "no one likes this");
  } else if (contador == 1) {
    let newname;
    for (let x in names) {
      newname = names[x];
    }
    return newname + " likes this";
  } else if (contador == 2) {
    let newname0, newname1;
    for (let x in names) {
      newname0 = names[0];
      newname1 = names[1];
    }
    return newname0 + " and " + newname1 + " like this";
  } else if (contador == 3) {
    let newname00, newname11, newname22;
    for (let x in names) {
      newname00 = names[0];
      newname11 = names[1];
      newname22 = names[2];
    }
    return newname00 + ", " + newname11 + " and " + newname22 + " like this";
  } else if (contador > 3) {
    let n;
    n = contador - 2;
    let newname00, newname11;
    for (let x in names) {
      newname00 = names[0];
      newname11 = names[1];
    }
    return newname00 + ", " + newname11 + " and " + n + " others like this";
  }
}
```
# Bit counting
## Solution
```
var countBits = function(n) {
    let neww;
    neww= n.toString(2);
    let contador=0;
    for(let x in neww){
      if(neww[x]==1){
        contador++;
      }
    }
    return contador
  }
```
# Your order, please
## Solution
```
function order(words) {
    let array = words.split(' ');
    let sortedArray = [];
    for (i = 0; i <= array.length; i++) {
      for (j = 0; j < array.length; j++) {
        if (array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }
```
---
## Thursday, January 19💻
---
# Counting duplicates
## Solution
```
function duplicateCount(text) {
    let duplicates = 0;
    text = text.toLowerCase(); // todo minuscula
    for (let i = 0; i < text.length; i++) {
      if (text.indexOf(text[i]) !== text.lastIndexOf(text[i])) {
        duplicates++;
        text = text.replace(new RegExp(text[i], 'g'), '');
        i = i - 1;
      }
    }
    return duplicates;
  }
```
# Encrypt this!
## Solution
```
function encrypt(word) {
    if (word.length === 1) return word.charCodeAt(0);
    const charBackup = word[1];
    word = word.replace(word[0], word.charCodeAt(0));
    word = word.replace(charBackup, word[word.length - 1]);
    word = word.replace(/\w$/, charBackup);
    return word;
  }
  
  var encryptThis = function (text) {
    const textArray = text.split(' ');
    let result = '';
    textArray.forEach((w) => {
      result = result + ' ' + encrypt(w);
    });
    return result.trim();
  };
```
# Valid parentheses
## Solution
```
function validParentheses(parens) {
    let valid = 0;
    for (let i = 0; i < parens.length; i++) {
      if (parens[i] === ')') valid--;
      if (parens[i] === '(') valid++;
      if (valid < 0) return false;
    }
    return valid == 0;
  }
```
# Convert string to camel case
## Solution
```
function toCamelCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (i != 0 && (str[i - 1] === '_' || str[i - 1] === '-')) {
        result += str[i].toUpperCase();
      } else if (str[i] != '-' && str[i] != '_') {
        result += str[i];
      }
    }
    return result;
  }
```
