const { DataTypes } = require('sequelize');
const sequelize = require('../../../dbConn');


// this is Blog table model which will be used to insert values into db based on this model

const PersonSchema = sequelize.define('Person',{
    blogid: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true
    },
    
},{
    tableName: 'Person'
});

try{
    console.log("Person database = ", PersonSchema === sequelize.models.Person);
}catch(err){
    console.log("error occured");
}

module.exports = PersonSchema;

