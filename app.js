if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
//import dependencies
const express = require("express");
const connectToDb = require("./mongodb/connectToMongo");
const cors = require("cors");
const blogController = require("./controller/blogController");

const app = express();
app.use(express.json());
app.use(cors());
connectToDb();

app.get("/blogs", blogController.getBlogs);
app.get("/blogs/:id", blogController.getBlogByBlogId);
app.post("/blogs", blogController.createBlog);

app.listen(process.env.PORT);
