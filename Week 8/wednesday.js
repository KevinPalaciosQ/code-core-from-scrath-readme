// Who likes it?
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
// Bit counting
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
// Your order, please
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