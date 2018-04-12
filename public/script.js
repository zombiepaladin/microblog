/** @function fetchPosts
  * Fetch all current posts from the server
  * and display them on the page
  */
function fetchPosts() {
  // Use a fetch request to retrieve the posts
  fetch('/posts').then(function(response){
    // Convert the response JSON text into a JS object
    return response.json();
  }).then(function(posts){
    // Insert a new div containing each post
    // into the blog element on the page.
    posts.forEach(function(post){
      // Create a new div
      var elm = document.createElement('div');
      // Add the post CSS class
      elm.classList.add('post');
      // Set the div's content to the post
      elm.innerText = post;
      // Append the post to the blog
      document.getElementById('blog').appendChild(elm);
    });
  });
}

/** @function submitPost
  * Submits a new post to the server
  * @param {Event} event - the event that triggered the submission
  */
function submitPost(event) {
  // Prevent the default response (submitting the page via browser)
  event.preventDefault();
  // Get the message from the input form
  var message = document.getElementById('message').value;
  // URLEscape the message
  message = encodeURIComponent(message)
  // Submit the message to the server
  fetch('/posts/create?message=' +  message).then(function(response){
    if(response.status === 200) {
      document.getElementById('message').value = '';
    }
  });
}

// Add event listener to form
document.getElementById('new-post').addEventListener('submit', submitPost);

// Grab all current posts
fetchPosts();
