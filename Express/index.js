const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send("About Page");
});
app.put("/", (req, res) => {
  res.send("Put Page");
});
app.delete("/", (req, res) => {
  res.send("Delete Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
