// import sequelize - database connection
const sequelize = require('./dbConn');

// import all Schemas for all tables
const Blog = require('./ENTITIES/Blogs/Models/blogSchema');
// const Person = require('./ENTITIES/Person/Model/personSchema');

// this command will run all tables setup into the database
sequelize.sync();


// below command is an example to run only one table schema at a time
// --------------------TO RUN BLOG TABLE-----------------------------
// Blog.sync({force: true});     // drop existing table and create new table
// Blog.sync();       // neither table is created not updated
// Blog.sync({alter: true});     // update the table in the database
// Blog.drop();     //   to drop the table  
// -------------------------------------------------------------------- 