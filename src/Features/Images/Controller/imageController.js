// const multer = require('multer');
const imgUpload = require("../Middleware/imageMiddleware");


const imgView = (req,res) => {
    console.log(req.body);
    res.render("upload");
}

// SAVE IMAGE WITH FILE
const saveImg = async (req,res) => {
    // save Image on This FILE SERVER ONLY
    try{
        // await imgUpload.single("image-test");
        // console.log(imgUpload);
        res.send("save image running");
        console.log("image save data = ",req.file , " \n body data = ",req.body);

    }catch(err){
        console.log("error");
    }
};


// S3 UPLOAD
const s3upload = (req, res) => {
    console.log(req.body);
    res.send(" s3 upload ");
}



module.exports = { imgView , saveImg , s3upload };