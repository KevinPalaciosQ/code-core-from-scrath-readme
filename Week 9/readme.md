# Week 8
---
## Monday, January 23💻
---
# "this" is a problem
## Solution
```
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

var n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
```
# "Thinkful - List and Loop Drills: Lists of lists"
## Solution
```
function processData(data){
  return data.map(function(ar){
      return ar[0]-ar[1];
  }).reduce(function(a, b){ return a * b; });
}
```
# Stop gninnipS My sdroW!
## Solution
```
function spinWords(string){
  let words = string.split(' ');
  return words.map(function(s){
    return s.length >=5? s.split("").reverse().join(""): s;
  }
  ).join(" ");
}
```
---
## Tuesday, January 24💻
---
# "this" is an other problem
## Solution
```
function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = this.firstName + ' ' + this.lastName;
}

NamedOne.prototype = {
    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
        this.fullName = this._firstName + ' ' + this._lastName;
    },
    get fullName() {
        return this._fullName;
    },
    set fullName(value) {
        var names = value.split(' ');
        if (names.length === 2) {
            this._firstName = names[0];
            this._lastName = names[1];
            this._fullName = this._firstName + ' ' + this._lastName;
        }
    }
};
```
---
# "Who likes it?"
## Solution
```
function likes(names) {
  switch(names.length){
      case 0:
        return "no one likes this";
      case 1:
        return names[0] + " likes this";
      case 2:
        return names[0] +" and "+ names[1] + " like this"
      case 3:
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      default:
        return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
  }
}
```
---
# Convert string to camel case
## Solution
```
function toCamelCase(str){
  let words = str.split(/[-_]/);
  let result = words[0];
  for(let i = 1; i < words.length; i++){
    result+= words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
```
---
## Wednesday, January 25💻
---
# Easy mathematical callback
## Solution
```

```
# Moving Zeros To The End
## Solution
```

```
# Valid Parentheses
## Solution
```

```
---
## Thursday, January 26💻
---
# The Hashtag Generator
## Solution
```

```
# String incrementer
## Solution
```

```
