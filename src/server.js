const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const path = require('path');
dotenv.config();

const app = express();
const port = process.env.PORT;

const Routes = require('./Routes/routes');
const ImgCtrl = require('./Features/Images/Controller/imageController');


// databases 
// require('./Database/index');
// const dbconn = require('./Database/dbConn');

// server header access 
app.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*"); // NOSONAR
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE,PATCH, OPTIONS');
  next();
});

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

// server setup
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(express.text({limit: '50mb', type: 'text/*'}));
app.use(express.raw({limit: '50mb', type: 'application/*'}));
app.use(cors());


// API request
app.get('/', (req,res)=>{res.send("THIS IS THE BACKEND SERVER ")});
app.get('/upload', ImgCtrl.imgView);
app.use('/api/daani', Routes);

async function init(){
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });
}
init();

