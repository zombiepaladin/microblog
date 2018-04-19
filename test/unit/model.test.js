const model = require('../../src/model.js');

test('getAllPosts() should return an array of all messages', function() {
  expect(model.getAllPosts()).toEqual([]);
});

test('createPost() should add a new message to the Array', function() {
  model.createPost('testing...');
  expect(model.getAllPosts()).toEqual(['testing...']);
});

test('createPost() should NOT add a message more than 255 characters in length', function(){
  var message = '';
  for(var i = 0; i < 256; i++) {
    message += 'a';
  }
  model.createPost(message);
  expect(model.getAllPosts()).toEqual(['testing...']);
});
