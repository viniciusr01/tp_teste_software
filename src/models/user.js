const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/DataBase.db')

const user = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      dataDeNascimento: {
        type: DataTypes.DATE,
        unique: false,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      cpf: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      telefone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }, {
      tableName: 'users'
    }
    )
  
    return User
  }
  
  module.exports = user