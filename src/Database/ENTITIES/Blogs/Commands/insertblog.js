const Blog  = require("../Models/blogSchema");
const { v4: uuidv4 } = require("uuid");

function uniqueid(){
    return uuidv4();
}

console.log(uniqueid());
console.log("uuid = ",uuidv4());

const saveBlog = async (data) => {
    console.log("insert blog db =",data);
    // const b2 = await Blog.create(data);
    // console.log("b2 data here is ................................ = ",b2);
    
    try{
        const TestBlog = Blog.build({
            blogid: data.bid,
            categoryid: data.cid,
            organizationid: data.oid,
            authorid: data.aid,
            title: data.title,
            description: data.desc,
            featuredImg: data.fimg,
            youtubeUrl: data.yurl,
            status: data.status
        });
        console.log("Testblog is instance = ",TestBlog instanceof Blog);
        console.log("data received =",TestBlog);
    
        await TestBlog.save();
        console.log("saved successfully");
        return "saved";

    }catch(err){
        console.log("error = ",err);
    }

}

// POSTMAN API RAW DATA POST FORM 
/*{
    "bid": "953951e0-f109-4b8b-8a65-cdded77b85bf",
    "cid": "953951e0-f109-4b8b-8a65-cdded77b85bq",
    "oid": "953951e0-f109-4b8b-8a65-cdded77b85ba",
    "aid": "953951e0-f109-4b8b-8a65-cdded77b85bq",
    "title": "one test postman",
    "desc": "test from postman",
    "fimg": "IMAGE IS SENDING HERE",
    "yurl": "YOUTUBE URL IS SHOWN HERE",
    "status": false
}*/

// Blog("953951e0-f109-4b8b-8a65-cdded77b85bf","953951e0-f109-4b8b-8a65-cdded77b85bq","953951e0-f109-4b8b-8a65-cdded77b85ba","953951e0-f109-4b8b-8a65-cdded77b85bq",
// "one test postman", "test from postman", "IMAGE IS SENDING HERE", "YOUTUBE URL IS SHOWN HERE", false);

module.exports = { saveBlog } ;
