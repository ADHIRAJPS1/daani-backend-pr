const BlogSch = require('../Models/blogSchema');
const { Op } = require("sequelize");

//get all blogs
var getBlogs = async () => {
    // let data = data;
    // console.log(data);
    let blogsdata = await BlogSch.findAll();

    // console.log("database get blogs = ",blogsdata);
    return blogsdata;
};


//get blogs by id
const getBlogById = async(id) => {
    let data = await BlogSch.findAll({ where : { blogid : id}});
    console.log("db");
    return data;
}

// get one blog by id
const getOneBlogById = async(id) => {
    let data = await BlogSch.findOne({ where : { id : id}});
    return data;
}

const getblogbycategory = async(categoryid) => {
    let data = await BlogSch.findAll({ where : { categoryid : categoryid}});
    return data;
};

const getBlogByAuthor = async(authorid) => {
    let data = await BlogSch.findAll({ where : { authorid : authorid}});
    return data;
}

const getBlogsByStatus = async(status) =>{
    let data = await BlogSch.findAll({where: {
        status: status
    }});
    return data;
};

const getBlogsByTitle = async(title) => {
    try{
        console.log("getblog =",title);
        let data = await BlogSch.findAll({ where: {
            title: {
                [Op.like]: `%${title}%` 
            }
        }});
        console.log("data =",data);
        return data;
    }catch(err) { 
        return err;
    }
}

module.exports = { getBlogs, getBlogById , getOneBlogById , getblogbycategory , getBlogsByStatus , getBlogByAuthor , getBlogsByTitle};

// how to write query where title contains "positive" ?