const { getBlogs , getBlogById } = require('../../../Database/ENTITIES/Blogs/Queries/getblog');
const { saveBlog } = require('../../../Database/ENTITIES/Blogs/Commands/insertblog');
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
            return "error";
        }
        return "saved";

    }catch(err) {
        return err;
    }
};


// datablogs();
module.exports = { getAllBlogs , blogById , addBlog } ;