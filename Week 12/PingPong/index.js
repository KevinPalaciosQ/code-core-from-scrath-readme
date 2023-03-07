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