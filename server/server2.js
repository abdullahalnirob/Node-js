const http = require("http");
const port = 1000;
const server = http.createServer((req, res) => {
  res.writeHead("201", { "Content-Type": "text/html" });
  res.write("<h1>My name is Abdullah Al Nirob</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
