//Using spread operator, write a program to create a new object that will look exactly like the one given in the output

const post = {post: "This is a post"};
const comments = [{content: "Good post"}, {content: "Thank you for the post"}];

const newObject = {
  ...post,
  comments: [...comments]
};

console.log(JSON.stringify(newObject, null, 2));
