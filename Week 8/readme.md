# Week 8
---
## Monday, January 16💻
---
# raining JS #7: if..else and ternary operator
## Solution
```
function saleHotdogs(n){
    if (n < 5) return n * 100
    else if (n < 10) return n * 95
    else return n * 90
  }  
```
---
## Tuesday, January 17💻
---
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
---
## Thursday, January 16💻
---
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