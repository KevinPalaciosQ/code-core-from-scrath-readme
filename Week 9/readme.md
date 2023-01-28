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

```
---
# "Who likes it?"
## Solution
```

```
---
# Convert string to camel case
## Solution
```

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
