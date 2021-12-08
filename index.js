const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlNyaApa = url.parse(req.url, true).path;
  const parsedURL = url.parse(req.url, true);
  console.log(urlNyaApa, "=========");

  if (urlNyaApa === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to about us page");
  } else if (urlNyaApa === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Welcome to contact us page");
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello world");
  }

  res.end();
});

server.listen(8000);
