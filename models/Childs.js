const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');
const Persons = require('./Persons');

const Childs = db.define('Childs', {

    id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "Name must containg only letters"
            },
            len: {
                args: [20, 150],
                msg: "The name must contain minimun 2 characters"
            }
        }
    },
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
    tableName: 'Childs'
  });

  Childs.belongsTo(Persons);
  module.exports = Childs;