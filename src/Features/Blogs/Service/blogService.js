const { getBlogs , getBlogById , getOneBlogById , getblogbycategory , getBlogsByStatus , getBlogByAuthor , getBlogsByTitle } = require('../../../Database/ENTITIES/Blogs/Queries/getblog');
const { saveBlog } = require('../../../Database/ENTITIES/Blogs/Commands/insertblog');
const { Error } = require('sequelize');
// get All blogs service
const getAllBlogs = async () => {
    
    let data = await getBlogs();
    return data;
};

// get Blogs By Id
const blogById = async (id) => {
    let blogdata = await getBlogById(id);
    console.log("service = ",blogdata);
    return blogdata;
}

const addBlog = async (data) => {
    try{
        let d = data;
        console.log("service data = ",d);
        let blog = await saveBlog(d); // db call to insert blog
        console.log("newBlog is created = ",blog);
        if(!blog){
            throw new Error;
        }
        return "saved";

    }catch(err) {
        return err;
    }
};

const oneBlogById = async (id) => {
    try{
        let blog = await getOneBlogById(id);
        if(!blog){
            throw new Error;
        }
        else{
            return blog;
        }
    }catch(err) {
        return err;
    }
};

const BlogByCategory = async (categoryid) => {
    try{
        let blogs = await getblogbycategory(categoryid);
        if(!blogs){
            console.log('service', blogs );
            throw new Error;
        }
        else{
            return blogs;
        }
    }catch(err){
        return err;
    }
};

const BlogByAuthor = async (authorid) => {
    try{
        console.log("author s");
        let blogs = await getBlogByAuthor(authorid);
        if(!blogs){
            throw new Error;
        }
        else{
            return blogs;
        }
    }catch(err){
        return err;
    }
};

const BlogsByStatus = async (status) => {
    try{
        let blogs = await getBlogsByStatus(status);
        if(!blogs){
            throw new Error;
        }
        else{
            return blogs;
        }
    }
    catch(err) {
        return err;
    }
};

const BlogsByTitle = async (title) => {
    try{

        let blogs = await getBlogsByTitle(title);
        if(!blogs){
            throw new Error;
        }else{
            return blogs;
        }
    }catch(err) {
        return err;
    }
}


// datablogs();
module.exports = { getAllBlogs , blogById , addBlog , oneBlogById , BlogByCategory , BlogByAuthor , BlogsByStatus , BlogsByTitle } ;