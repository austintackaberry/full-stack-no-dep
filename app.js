const http = require("http");
const url = require("url");
const fs = require("fs");

const hostname = "127.0.0.1";

const port = 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    console.log("Received request..." + req.url);

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Content-Security-Policy", "default-src 'self'");
    if (path === "/") {
        const html = fs.readFileSync("src/index.html");
        res.setHeader("Content-Type", "text/html");
        res.write(html);
    } else if (path.includes(".css")) {
        const css = fs.readFileSync("src/styles.css");
        res.setHeader("Content-Type", "text/css");
        res.write(css);
    } else if (path === "/index.js") {
        const js = fs.readFileSync("src/index.js");
        res.setHeader("Content-Type", "application/javascript");
        res.write(js);
    } else if (path === "/nextText.json") {
        const json = fs.readFileSync("assets/nextText.json");
        res.setHeader("Content-Type", "application/json");
        res.write(json);
    }
    res.end();
});

console.log("Listening on port " + port);
server.listen(port);
