const express = require("express");
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter",(req,res) =>{
    res.send("Preetirajdotcom")
});

app.get("/youtube",(req,res) => {
    res.send("<h2>Chai or Backend</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})