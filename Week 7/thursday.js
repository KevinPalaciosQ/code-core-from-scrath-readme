//Convert a String to a Number!
const stringToNumber = function(str){
    return parseInt(str);
    return null;
  }
//Convert number to reversed array of digits
function digitize(n) {
    return String(n).split('').reverse().map(Number);
  }
//Truthy and Falsy
const truthy = [true, 1, "false", 5, {}];
const falsy = [false, 0, "", null, undefined];
//Training JS #4: Basic data types--Array
function getLength(arr){
    return arr.length;
  }
  function getFirst(arr){
    return arr[0];
  }
  function getLast(arr){
    return arr[arr.length - 1];
  }
  function pushElement(arr){
    var el=1;
    arr.push(el);
    
    return arr;
  }
  function popElement(arr){
    arr.pop();
    
    return arr;
  }