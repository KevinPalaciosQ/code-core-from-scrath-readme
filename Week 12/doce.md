# Forrest Gump Ping-Pong API 🏓

## Description

- Use Express JS to build the API.
- Use any port you want for the API.
- The API should use route parameters to get the desired delay:

  ```bash
    # Request example
    # Here 3000 indicates a delay of 3000 milliseconds
    http://localhost:3000/api/delay/3000
  ```

- Your API should have just one request handler.
- You can send any response you want after the delay has expired.
- If no delay is provided in the request, the API should use 1000 as default.

## Solution

### Code

***index.js***

```JavaScript
import express from "express";
const app = express()
const port = 3000

app.use(express.json());

app.get('/api/delay/:delay', (req, res) => {
    let delay = req.params.delay;

    if(delay == undefined || delay == null || delay == "") {
        delay = 1000;
    }
    
    setTimeout(() => {
        res.send(`Delayed response by ${delay} ms`)
    }, delay);
})

app.get('/api/delay', (req, res) => {
    setTimeout(() => {
        res.send(`Delayed response by 1000 ms`)
    }, 1000);
})

app.listen(port, () => {
  console.log(`Running app listening on port ${port}`)
})
```


### Image Output

