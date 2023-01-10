//String: substr()
function firstWord(str) {
    let fB = str.indexOf(' ');
    return str.substring(0, fB);
  }
//String: replace()
function normalize(DateToday) {
    return DateToday.replace(/-/g, "/");
  }
//Increment
// The Result of x will be: 7
//Farenheit 
function toFahrenheit(getcelsius) {
    return 1.8 * getcelsius + 32;
  }
//Boolean
function nand(x, y) {
    return !(x && y);
  }