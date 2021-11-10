const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Persons = db.define('Persons', {

    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "Name must containg only letters"
            },
            len: {
                args: [20, 150],
                msg: "The name must contain minimun 20 characters"
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "Last name must containg only letters"
            },
            len: {
                args: [20, 150],
                msg: "The last name must contain minimun 2 characters"
            }
        }
    },
    gender: {
        type: DataTypes.ENUM("Male", "Female", "Others"),
        allowNull: false,
       },  

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    married: DataTypes.BOOLEAN,

    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },

    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4 
      }
  },{
    tableName: 'Persons'
  });

  module.exports = Persons;