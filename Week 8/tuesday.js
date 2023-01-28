//Even or odd
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
//A wolf in sheep's clothing
function warnTheSheep(queue) {
    const stateWolf = queue.indexOf("wolf");
    if (stateWolf == queue.length - 1)
      return "Pls go away and stop eating my sheep";
    const stateSheep = queue.length - (stateWolf + 1);
    return (
      "Oi! Sheep number " + stateSheep + "! You are about to be eaten by a wolf!"
    );
  }
//Decode the morse code
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