// import sequelize - database connection
const sequelize = require('./dbConn.js');

// import all Schemas for all tables
const Blog = require('./ENTITIES/Blogs/Models/blogSchema');
const Person = require('./ENTITIES/Person/Model/personSchema');

// this command will run all tables setup into the database
sequelize.sync({force: true});
// Person.sync({force: true});
