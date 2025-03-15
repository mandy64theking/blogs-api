const Blog = require("../models/blog");

async function createBlog(req, res) {
  const blog = await Blog.create({
    title: req.body.title,
    description: req.body.description,
    createdDate: req.body.createdDate,
    imageUrl: req.body.imageUrl,
    author: req.body.author,
    blogText: req.body.blogText,
  });
  res.json({ blog });
}

async function getBlogs(req, res) {
  try {
    const blogs = await Blog.find();
    res.json({ blogs });
  } catch (error) {
    console.error("Error fetching batches:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getBlogByBlogId(req, res) {
  try {
    const blogs = await Blog.find({
      _id: req.id,
    });
    res.json({ blogs });
  } catch (error) {
    console.error("Error fetching batches:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { createBlog, getBlogs, getBlogByBlogId };
