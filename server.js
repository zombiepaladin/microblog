const express = require('express');
const controller = require('./src/controller');

const PORT = 3000;

// Create the express server
var app = express();

// Add routes for listing and creating posts
app.get('/', controller.list);
app.post('/', controller.create);

// Serve files directly from the public folder
app.use(express.static('public'));

// Launch the server
app.listen(PORT, function(){
  console.log("Listening on PORT " + PORT);
});
