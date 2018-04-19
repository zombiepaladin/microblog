const cheerio = require('cheerio');
const view = require('../../src/view');

test('view.renderBlog() should return html of the blog page', function() {
  expect(view.renderBlog([])).toEqual(expect.stringContaining('<!doctype html>'));
});

test('the title "microblog" should be displayed on the page', function() {
  const $ = cheerio.load(view.renderBlog([]));
  expect($('title').text()).toEqual("Microblog Example");
  expect($('h1').text()).toEqual("Microblog");
});

test('posts provided to renderBlog should be rendered in divs', function() {
  const posts = ["one", "two", "three"]
  const $ = cheerio.load(view.renderBlog(posts));
  $('.post').each(function(index, item){
    expect(cheerio.load(item).text()).toEqual(posts[index]);
  });
});

test('a new message form should be displayed on the page', function() {
  const $ = cheerio.load(view.renderBlog([]));
  expect($('form#new-post').children('textarea')).toBeDefined();
  expect($('form#new-post').children('input[type=submit]')).toBeDefined();

});
