//Count strings in objects
function strCount(obj){
    let c = 0
    for (key in obj){
      if (typeof obj[key] == 'string') c++;
      if (typeof obj[key] == 'object') c+= strCount(obj[key]);
    }
    return c
  }
//Extending JavaScript Objects: Get First & Last Array Element
Array.prototype.first = function() {
    return this[0];
  };
  
  Array.prototype.last = function() {
    return this[this.length-1];
  };
//Object Oriented Piracy
function Ship(d,c) { 
    this.d = d
    this.c = c;
    
    this.isWorthIt = function (){
      return (this.d - this.c * 1.5) > 20;
    }
  }
"2"==2;