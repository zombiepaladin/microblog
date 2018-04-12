var posts = [];

/** @function getAllPosts
  * List all posts in the database
  * @return {Array} the posts as an array of strings
  */
function getAllPosts() {
  // using Array.slice() creates a shallow copy
  // of our posts array (instead of returning a reference)
  return posts.slice();
}

/** @function createPost
  * Creates a new post in our database
  * @param {string} message - the message to post
  */
function createPost(message) {
  posts.push(message);
}

/** @module Model 
  * Provides functions for storing and retreiving posts
  */
module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost
}
