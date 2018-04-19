const querystring = require('querystring');
const model = require('../src/model');
const view = require('../src/view');

/** @function list
  * Lists all posts in the blog
  * @param {http.clientRequest} req - the wrapper around the client's http request
  * @param {http.serverResponse} res - the object to create and send a http response
  */
function list(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(view.renderBlog(model.getAllPosts()));
}

/** @function create
  * Creates a new post in the blog and then
  * serves all posts in the blog
  * @param {http.clientRequest} req - the wrapper around the client's http request
  * @param {http.serverResponse} res - the object to create and send a http response
  */
function create(req, res) {
  var body = '';

  req.on('data', function(chunk) {
    body += chunk;
  });

  req.on('end', function() {
    var props = querystring.parse(body);
    model.createPost(props.message);
    list(req, res);
  });

}

/** @module Controller
  * A module that provides the logic for a microblog.
  */
module.exports = {
  list: list,
  create: create
}
