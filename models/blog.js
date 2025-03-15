const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdDate: Date,
  imageUrl: String,
  author: String,
  blogText: String,
  tag: String,
  organization: String,
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
