import express from "express";
const app = express();

const port = process.env.port || 3000;
app.get("/", (req, res) => {
  res.send("Home Page");
});
// get a list of all 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", contant: "This is jokes" },
    { id: 2, title: "A joke2", contant: "This is jokes" },
    { id: 3, title: "A joke3", contant: "This is jokes" },
    { id: 4, title: "A joke4", contant: "This is jokes" },
    { id: 5, title: "A joke5", contant: "This is jokes" },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`App are listening port at localhost:${port} `);
});
