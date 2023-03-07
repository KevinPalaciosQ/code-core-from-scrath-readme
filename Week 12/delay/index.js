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