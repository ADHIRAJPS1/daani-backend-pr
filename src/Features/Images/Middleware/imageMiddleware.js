const multer = require('multer');
const path = require('path');

// full control to store our files on disk
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/data/uploads' );
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' ;
      cb(null, uniqueSuffix + '-' + path.extname(file.originalname));
    }
  });

  // destination - where files to be stored
        // cb - ( null , FOLDER_NAME );
  // filename - name of the file to be stored
        // cb - ( null , filename how you want to save);


  const upload = multer({ storage: storage })  // here i have made upload option

  module.exports = upload;