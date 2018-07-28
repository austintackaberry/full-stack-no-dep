const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.headers);
    const path = url.parse(req.url).pathname;
    if (path === "/") {
        const html = fs.readFileSync("src/index.html");
        res.write(html);
    }
    res.end();
});

console.log("Listening on port " + port);
server.listen(port);
