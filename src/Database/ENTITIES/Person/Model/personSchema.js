const { DataTypes } = require('sequelize');
const sequelize = require('../../../dbConn');


// this is Blog table model which will be used to insert values into db based on this model

const PersonSchema = 
    
    sequelize.define('Person',{
    firstName: {
        type: 'STRING',
        allowNull: false
    },
    lastName: {
        type: 'STRING',
    },
    dob: DataTypes.DATEONLY,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: DataTypes.BOOLEAN
},{
    tableName: 'Person',
    createdAt: true,
    updatedAt: true,
    
});
try{
    console.log("Person database = ", PersonSchema === sequelize.models.Person);
}catch(err){
    console.log("error");
}

module.exports = PersonSchema;

