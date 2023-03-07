# Express.JS Core Understanding

## Description

Now that you have a set of knowledge that allows you to understand what an API is, what is REST, HTTP etc...

It's time to see how we can implement all this using Node.JS and JavaScript. For this we will use Express.JS,
a library that allows us to create Web applications for the server that allows us to implement REST.

Please complete the assignments:
1. Read about the Chain of Responsibility design pattern [here](https://refactoring.guru/es/design-patterns/chain-of-responsibility).

2. Express JS Hello World:  
  - Create a new Node.JS project using NPM.
  - Install Express.JS as an external dependency in your project following [this](https://expressjs.com/es/starter/installing.html) guide.
  - Create an Express.JS Hello World application following [this](https://expressjs.com/es/starter/hello-world.html) guide.

## Solution
---
### Code

***index.js***

```JavaScript
const express = require('express')
import express from "express";
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Running app listening on port ${port}`)
})
```

***package.json***

```json
{
  "name": "expressjs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

### POSTMAN

