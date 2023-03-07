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
## Creation Package
![creation](https://user-images.githubusercontent.com/95326781/223333714-d2ca104b-28f1-40b2-96b6-4bfa24d8ecc5.jpg)
## Delay
![delay](https://user-images.githubusercontent.com/95326781/223333736-c5ec54d6-a748-46c4-8474-d9f06d2038f5.jpg)
## Delay 5000
![delay5000](https://user-images.githubusercontent.com/95326781/223333760-fb6fa7ce-9f88-4fbb-98ef-a0de4393ed51.jpg)
