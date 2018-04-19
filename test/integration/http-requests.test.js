const request = require('request');
const server = require('../../src/server');

const PORT = 3000;
const HOST = `http://localhost:${PORT}`;

beforeAll(function(){
  server.start(PORT);
});

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

// Create blog post
