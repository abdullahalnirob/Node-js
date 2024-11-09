const http = require("http");
const fs = require("fs");
const port = 1000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    fs.readFile("./html/home.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/about") {
    fs.readFile("./html/about.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/dashbord") {
    fs.readFile("./html/dashbord.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is running on port https://localhost:${port}`);
});
