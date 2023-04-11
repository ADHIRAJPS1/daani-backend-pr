// ALL DATA BASE TOUCH WILL HAPPEN FROM SERVICE SECTION
// const insblog = require('../../../Database/ENTITIES/Blogs/Commands/insertblog');

const { getAllBlogs, blogById , addBlog }  = require('../Service/blogService');

// class BlogController {
//     addBlog(){
//         // const blogdata = req.body;
//         insblog();
//     };

//     async getBlogs(req, res){
//         if(req.blog){
//             return "Get blog working ";
//         }
//         else{
//             res.status(400).json({message: "no data found"});
//         }
//         res.send("working");
//     }
// };

const getBlogs = async (req,res) => {
    // let d = req.body;
    // console.log("d= ",d);
    const data = await getAllBlogs();
    // let blogsdata = await BlogSch.findAll();
    // console.log(blogService);
    res.status(200).json({data: data});
};
// getBlogs();

const BlogById = async (req,res) => {
    let id = req.params.id;
    let blogdata = await blogById(id);
    res.status(200).json({data: blogdata});
}

const newBlog = async(req,res)=>{
    let data = req.body;
    let blog = await addBlog(data);
    // console.log("blog at controller = " ,blog);
    res.status(200).json(blog);

}

module.exports =  { getBlogs , BlogById , newBlog} ;

