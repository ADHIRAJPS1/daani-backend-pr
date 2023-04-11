const { DataTypes } = require('sequelize');
const sequelize = require('../../../dbConn');


// this is Blog table model which will be used to insert values into db based on this model
const Blog = sequelize.define('Blog',{
    blogid: {
        type: DataTypes.UUID,
        allowNull: false
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
    createdat: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: DataTypes.BOOLEAN
},{
    tableName: 'Blog',
    createdAt: true,
    updatedAt: true,

});

console.log("blog table =",Blog === sequelize.models.Blog);
module.exports = Blog;

