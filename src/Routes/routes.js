const express = require('express');
const Routes = express.Router();

// all controllers here
const blogCtrl = require('../Features/Blogs/Controller/blogcontroller');
const imgCtrl = require('../Features/Images/Controller/imageController');
const imgMiddleware = require("../Features/Images/Middleware/imageMiddleware");

// all routes here
Routes.get('/getblogs', blogCtrl.getBlogs);
Routes.get('/blog/:id', blogCtrl.BlogById);
Routes.post('/newblog', blogCtrl.newBlog);
Routes.get('/blogs/:categoryid', blogCtrl.getByCategory);
Routes.get('/ablog/:authorid', blogCtrl.blogbyauthor);
Routes.get('/sblog/:status', blogCtrl.blogbystatus);
Routes.get('/tblog/:title', blogCtrl.getBlogsByTitle);

Routes.post('/uploadImg', imgMiddleware.single("image"), imgCtrl.saveImg );
Routes.post('/s3imgUpload', imgCtrl.s3upload);

// Routes.post('/upload', a);

module.exports = Routes;
