/** @function renderBlog
  * Renders the blog HTML
  * @param {Array} posts - an array of strings
  * @return {string} the formatted html
  */
function renderBlog(posts) {
  const postHTML = posts.map(function(message) {
    return `<div class="post">${message}</div>`;
  }).join('');
  return `
    <!doctype html>
    <html>
      <head>
        <title>Microblog Example</title>
        <link type="text/css" rel="stylesheet" href="style.css"></link>
      </head>
      <div class="column">
        <h1>Microblog</h1>
        <div id="blog">
          ${postHTML}
        </div>
        <form id="new-post" method="POST">
          <fieldset>
            <textarea id="message" name="message" cols="5"></textarea>
            <input type="submit" value="Post"/>
          </fieldset>
        </form>
      </div>
    </body>
  </html>
  `
}

/** @module View
  * A module for providing the bodies for http responses.
  */
module.exports = {
  renderBlog: renderBlog
}
