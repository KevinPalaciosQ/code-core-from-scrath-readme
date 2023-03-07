# Forrest Gump Ping-Pong API 🏓

## Description

- Use Express JS to build the API.
- Use any port you want for the API.
- The API has to be able to respond to the "ping" request with the "pong" message.
- Use `/api/buba-gump` as the root route for the API.
- Make sure your API responds to the request using JSON e.g.:
  ```javascript
  {
    "message": "pong"
  }
  ```
- Use Postman to test your API.
- Optional but desirable, make your API capable of responding to any player move:
  - If the user makes the "ping" move, your API should respond with "pong".
  - If the user makes the "pong" move, your API should respond with "ping".

## Solution
---
### Code

***index.js***

```JavaScript
import express from "express";
const app = express()
const port = 3000
app.use(express.json());
app.post('/api/buba-gump', (req, res) => {
    const { message } = req.body;
    if(message === "ping") 
    {
        res.send("pong");
    } else if(message === "pong") 
    {
        res.send("ping");
    } else 
    {
        res.send("Invalid message");
    }
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

### Output Images 
![PingPong](https://user-images.githubusercontent.com/95326781/223326872-20422255-8a97-4971-b525-ec72924b1a09.jpg)
### PING-PONG
![APIPINGPONG](https://user-images.githubusercontent.com/95326781/223326903-bff65fbe-0721-43c0-922c-daa07ed03f4f.jpg)
### PONG-PING
![APIPONGPING](https://user-images.githubusercontent.com/95326781/223326899-e0458ddd-e905-4998-8317-6bd5da479470.jpg)

