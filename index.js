const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:id", (req, res) => {
  const p = req.params;
  res.send("Hello");
});
f;

// app.get('/', (req,res)=> {
//   res.send('Hello World')
// })

// app.get('/', (req,res)=> {
//   res.send('Hello World')
// })

app.listen(3000, () => {
  console.log("Server is Listening..");
});
