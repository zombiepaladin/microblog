const httpMocks = require('node-mocks-http');

const controller = require('../../src/controller');
const model = require('../../src/model');
const view = require('../../src/view');

// We need to mock the model and view to
// replace the functions used by the controller
jest.mock('../../src/model');
jest.mock('../../src/view');

test('controller.list() should list all posts in the model', function(done) {
  const posts = ["one", "two", "three"];

  // We mock the model.getAllPosts() to return a known
  // list of posts.
  model.getAllPosts.mockReturnValueOnce(posts);

  // We mock the view.renderBlog() to simply serialize
  // the posts passed to it
  view.renderBlog.mockImplementationOnce(function(posts) {
    return JSON.stringify(posts);
  });

  // We need a mock http.ClientRequest object to
  // pass into the controller.list() method
  var req = httpMocks.createRequest({
    method: 'GET',
    url: '/'
  });

  // We also need a mock http.ServerResponse object
  // to pass into the controller.list() method
  var res = httpMocks.createResponse({
    req: req,
    eventEmitter: require('events').EventEmitter
  });

  // Additionally, we need the response to listen for the
  // 'end' event which signifies we've sent our response
  res.on('end', function(){
    // We expect the JSON string that is the response's body
    // to be the same as the array of messages we started with
    expect(res._getData()).toEqual(JSON.stringify(posts));
    // Since the response.end is asynchronous, we need to trigger
    // the done() callback once it finishes to mark the test as complete
    done();
  });

  // Finally, test the controller.list() method
  controller.list(req, res);

});

/*
test('controller.create() should create a new post and add it to the model before serving a list of all posts', function(done) {
  var posts = ["one", "two", "three"];
  const newMessage = "testing...";

  // We mock the model.createPost() to add a post to
  // our array of posts.
  model.createPost.mockImplementationOnce(function(message){
    console.log('new message', message);
    posts.push(message);
  });

  // We mock the model.getAllPosts() to return our
  // array of messages
  model.getAllPosts.mockReturnValueOnce(posts);

  // We mock the view.renderBlog() to simply serialize
  // the posts passed to it
  view.renderBlog.mockImplementationOnce(function(posts) {
    return JSON.stringify(posts);
  });

  // We need a mock http.ClientRequest object to
  // pass into the controller.list() method
  var req = httpMocks.createRequest({
    method: 'POST',
    url: '/',
    body: {
      message: newMessage
    }
  });

  // We also need a mock http.ServerResponse object
  // to pass into the controller.list() method
  var res = httpMocks.createResponse({
    req: req,
    eventEmitter: require('events').EventEmitter
  });

  // Additionally, we need the response to listen for the
  // 'end' event which signifies we've sent our response
  res.on('end', function(){
    // We expect our array of messages to contain our new post
    expect(posts).toContain(newMessage);
    // We expect the JSON string that is the response's body
    // to be the same as the array of messages we started with
    expect(res._getData()).toEqual(JSON.stringify(posts));
    // Since the response.end is asynchronous, we need to trigger
    // the done() callback once it finishes to mark the test as complete
    done();
  });

  // Finally, test the controller.create() method
  controller.create(req, res);
});
*/
