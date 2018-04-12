var posts = [];

function getAllPosts() {
  console.log(posts);
  return posts.slice();
}

function createPost(message) {
  posts.push(message);
  console.log(posts);
}

module.exports = {
  getAllPosts: getAllPosts,
  createPost: createPost
}
