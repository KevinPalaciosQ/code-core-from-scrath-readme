# Week 7
---
## Monday, January 9💻
---
# String: substr()
## Solution
```
function firstWord(str) {
    let fB = str.indexOf(' ');
    return str.substring(0, fB);
  }
```
---
# String: replace()
## Solution
```
function normalize(DateToday) {
    return DateToday.replace(/-/g, "/");
  }
```
---
# Increment
## Solution
```
The Result of x will be: 7
```
---
# Farenheit
## Solution
```
function toFahrenheit(getcelsius) {
    return 1.8 * getcelsius + 32;
  }
```
---
# Boolean
## Solution
```
function nand(x, y) {
    return !(x && y);
  }
```
---
## Tuesday, January 9💻
---
# Objects
## Solution
```
function animal(obj){
    return 'This ' + obj.color + ' ' + obj.name + ' has ' + obj.legs + ' legs.';
```
# Return to sanity  
## Solution
```
function mystery() {
    var results = { sanity: 'Hello' };
    return results;
  }
```
# Object syntax debug
## Solution
```
  var rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient',
      },
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water',
      },
    },
  };
```
