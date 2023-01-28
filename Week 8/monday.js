//Training JS #7: if..else and ternary operator
function saleHotdogs(n){
    if (n < 5) return n * 100
    else if (n < 10) return n * 95
    else return n * 90
  }  
//Training JS #8: conditional statement--switch
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
//Basic calculator
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