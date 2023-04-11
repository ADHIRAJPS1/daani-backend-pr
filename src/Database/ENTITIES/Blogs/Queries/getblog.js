const BlogSch = require('../Models/blogSchema');

var getBlogs = async () => {
    // let data = data;
    // console.log(data);
    let blogsdata = await BlogSch.findAll();

    // console.log("database get blogs = ",blogsdata);
    return blogsdata;
};

const getBlogById = async(id) => {
    let data = await BlogSch.findAll({ where : { id : id}});
    return data;
}

const getOneBlogById = async(id) => {
    let data = await BlogSch.findOne({ where : { id : id}});
    return data;
}

module.exports = { getBlogs, getBlogById , getOneBlogById };
