const express = require("express");
const app = express();

const port = 4000;
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.listen(port,()=>{
 console.log(`App are listening port at localhost:${port} `)
})