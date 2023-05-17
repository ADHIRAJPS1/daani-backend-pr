const { DataTypes } = require('sequelize');
const sequelize = require('../../../dbConn');


// this is Blog table model which will be used to insert values into db based on this model
const Blog = sequelize.define('Blogs',{
    blogid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    categoryid:  {
        type: DataTypes.UUID,
        allowNull: false
    },
    organizationid: {
        type: DataTypes.UUID,
        allowNull: false
    },
    authorid: {
        type: DataTypes.UUID,
        allowNull: false
    },
    title: DataTypes.TEXT,
    description: DataTypes.STRING,
    featuredImg: DataTypes.STRING,
    youtubeUrl: DataTypes.STRING,
    status: DataTypes.BOOLEAN
},{
    tableName: 'Blog'
});

console.log("blog table schema =",Blog === sequelize.models.Blogs);

// Blog.sync({force: true}).then(()=>console.log("created BLOG SCHEMA"));
module.exports = Blog;

