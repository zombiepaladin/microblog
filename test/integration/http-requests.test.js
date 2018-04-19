const request = require('request');
const server = require('../../src/server');

const PORT = 3000;
const HOST = `http://localhost:${PORT}`;

// This hook is executed before any tests are run
beforeAll(function(){
  server.start(PORT);
});

// This hook is executed after all tests have been run
afterAll(function(){
  server.stop();
});

test('Serve blog page', function(done) {
  request(HOST + '/', function(err, res, body) {
    expect(err).toBeNull();
    expect(body).toMatchSnapshot();
    done();
  });
});

test('Create blog post', function(done) {
  request.post(HOST + '/', {form: {message: "test"}}, function(err, res, body) {
    expect(err).toBeNull();
    expect(body).toMatchSnapshot();
    done();
  });
});
