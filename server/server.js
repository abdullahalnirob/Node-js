const http = require('http');
const port = 1000
const server = http.createServer((req, res) => {
    res.end('<h1>My name is Abdullah Al Nirob</h1>');
})

server.listen(port,()=>{
    console.log(`Server is running on port https://localhost:${port}`);
})  