const express = require('express');
const controller = require('./controller');

var instance;

/** @function start
  * Launches the webserver on the specified port
  * @param {integer} port - the port to listen on.
  */
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

/** @function stop
  * Stops the webserver (if running)
  */
function stop() {
  if(instance) {
    instance.stop();
    instance = undefined;
  }
}

/** @module server
  * Provides a webserver implementation that can be
  * started and stopped.
  */
module.exports = {
  start: start,
  stop: stop
}
