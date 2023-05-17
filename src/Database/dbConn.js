const { Sequelize } = require("sequelize");        // postgres connection module
const dotenv = require("dotenv")
const configure = require("./Configuration/dbconfigure");   // db configuration values
dotenv.config()     //environment values

const sequelize = new Sequelize('postgresql://doadmin:AVNS_rQXN6Rq7LgrlEmJyF9n@dbtest-pg-do-user-13993963-0.b.db.ondigitalocean.com:25060/defaultdb?sslmode=false', {
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
        // ssl: {
        //     require: false,
        //     // rejectUnauthorized: false
        //     // key: "71ee869f9a39abc6b83c738aa686eeffc2c08566",
        //     // cert: "72d26f646a5b16a13a82207124e561b9ce552e61",
        //     // ca: "79e2ccf8-d27c-4390-99da-7e6929e64053 Project CA",
        //     // rejectUnauthorized: false
        // }
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