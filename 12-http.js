const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') res.end("Welcome to the homepage"); // If a request is send, send this back
  else if (req.url === '/about') res.end('about'); // And also directly 'end' connection (I guess)
  else res.end('This does not exist');
});

server.listen(5000);