const fs = require('fs');
const http = require('http');
const controller = require('./src/controller');

const PORT = 3000;

const css = fs.readFileSync('public/style.css');


function handleRequest(req, res) {
  switch(req.url) {
    case '/':
      if(req.method === 'GET') {
        controller.list(req, res);
      } else {
        controller.create(req, res);
      }
      break;
    case '/style.css':
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/css");
      res.end(css);
      break;
    default:
      res.statusCode = 400;
      res.end("Requested resource not found");
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Listening on PORT " + PORT);
});
