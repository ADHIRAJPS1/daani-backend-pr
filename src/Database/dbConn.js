const { Sequelize } = require("sequelize");        // postgres connection module
const dotenv = require("dotenv")
const configure = require("./Configuration/dbconfigure");   // db configuration values
const fs = require("fs");
const path = require("path");

dotenv.config()     //environment values

const sequelize = new Sequelize('postgres://postgres:adhirajA@1@localhost:5432/daanibackend', {
    logging: false
});

// db string url
// postgres:doadmin:AVNS_dW7UrJh65MuHdero3eN@db-postgresql-nyc1-63522-do-user-13993963-0.b.db.ondigitalocean.com:25060/defaultdb

// "postgres://postgres:adhirajA@1@localhost:5432/daanibackend"
    // (mysql/postgres/mongodb)://(user):(password)@(server):(port)/(database name)  


// default init function to connect to database

// const dbConfig = {
// 	"dialect": "postgres",
// 	'username' : 'testdb',
// 	'password' : 'AVNS_w5fHTNg4yPx4_Xcoqs_',
// 	'host' : 'dbtest-pg-do-user-13993963-0.b.db.ondigitalocean.com',
// 	'port' : 25060,
// 	'database' :'defaultdb',
// 	'dialectOptions': {
//         ssl: {
//             require: true,
//             // rejectUnauthorized: false,
//             ca: fs.readFileSync(path.join(__dirname, '../assets/ca-certificate.crt'))
            
//         }
//     },
// 	'logging':false
// };

// const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.database.password, dbConfig);

init = async () => {
    try {
        await sequelize.authenticate();
        console.log("connected with database");
    }
    catch (err) {
        console.log("error while connecting with database = ",err);
    }
};
init(); // calling init function to connect 


// const Blog = require('../Database/ENTITIES/Blogs/Models/blogSchema');

// sequelize.sync({force: true});
// console.log("all db connected");

module.exports = sequelize;     // export sequelize which is databasse connect variable