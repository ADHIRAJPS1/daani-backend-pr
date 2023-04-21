// ALL DATA BASE TOUCH WILL HAPPEN FROM SERVICE SECTION
// const insblog = require('../../../Database/ENTITIES/Blogs/Commands/insertblog');

const { getAllBlogs, blogById , addBlog , oneBlogById , BlogByAuthor , BlogByCategory , BlogsByStatus , BlogsByTitle }  = require('../Service/blogService');

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
    try{
        const data = await getAllBlogs();
        res.status(200).json({data: data});
    }
    catch(err){
        res.status(400).json({message: err});
    }
};
// getBlogs();

const BlogById = async (req,res) => {
    try{
        let id = req.params.id;
        let blogdata = await blogById(id);
        res.status(200).json({data: blogdata});
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

const newBlog = async(req,res)=>{
    try{
        let data = req.body;
        let blog = await addBlog(data);
        // console.log("blog at controller = " ,blog);
        res.status(200).json(blog);
    }
    catch(err){
        res.status(400).json({message: err});
    }
}

// const OneBlogById = async (req,res) =>{
//     try{
//         let id = req.params.id;
//         // let blogdata = await blogById(id);    // pending
//         res.status(200).json({data: blogdata});
//     }
//     catch(err){
//         res.status(400).josn({message: err});
//     }
// }

const getByCategory = async ( req,res ) => {
    try{
        let categoryid = req.params.categoryid;
        console.log("cid =",categoryid);
        let blogsdata = await BlogByCategory(categoryid);
        console.log("categories =",blogsdata);
        res.status(200).json({data: blogsdata});
    }
    catch(err){
        res.status(400).json({error: err});
    }
};

const blogbyauthor = async(req,res) => {
    try{
        let authorid = req.params.authorid;
        console.log("author c");
        let blogsdata = await BlogByAuthor(authorid);
        res.status(200).json({data: blogsdata});
        
    }catch(err){
        res.status(404).json({error: err});
    }
};

const blogbystatus = async(req,res) => {
    try{
        let status = req.params.status;
        console.log(" c status=", status);
        let blogsdata = await BlogsByStatus(status);
        res.status(200).json({data: blogsdata});
    }catch(err){
        res.status(404).json({error: err});
    }
};

const getBlogsByTitle = async (req,res) => {
    try{
        let title = req.params.title;
        let blogsdata = await BlogsByTitle(title);
        res.status(200).json({data: blogsdata});
    }catch(err){
        res.status(404).json({error: err}); 
    }
}

module.exports =  { getBlogs , BlogById , newBlog , blogbystatus , getBlogsByTitle , blogbyauthor , getByCategory } ;

