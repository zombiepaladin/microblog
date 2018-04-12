const querystring = require('querystring');
const model = require('./model');
const view = require('./view');

function list(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(view.renderBlog(model.getAllPosts()));
}

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

module.exports = {
  list: list,
  create: create
}
