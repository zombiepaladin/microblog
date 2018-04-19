const express = require('express');
const controller = require('./controller');

var instance;

function start(port) {
  // Create the express server
  var app = express();

  // Add routes for listing and creating posts
  app.get('/', controller.list);
  app.post('/', controller.create);

  // Serve files directly from the public folder
  app.use(express.static('public'));

  // Launch the server
  instance = app.listen(port, function(){
    console.log("Listening on PORT " + port);
  });

}

function stop() {
  if(instance) {
    instance.stop();
    instance = undefined;
  }
}

module.exports = {
  start: start,
  stop: stop
}
