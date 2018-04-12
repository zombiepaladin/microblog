function renderBlog(posts) {
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
          ${posts}
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

module.exports = {
  renderBlog: renderBlog
}
