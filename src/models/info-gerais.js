/*
const informacoesGerais = (sequelize, DataTypes) => {
    const informacoesGerais = sequelize.define('informacoesGerais', {
      nome: {
        type: DataTypes.STRING,
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
      email: {
        type: DataTypes.STRING,
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
      tableName: 'informacoesGerais'
    }
    )
  
    informacoesGerais.associate = (models) => {
        informacoesGerais.belongsTo(models.User, {
        foreignKey: 'courseId',
        as: 'course'
      })
    }
  
    return informacoesGerais
  }
  
  module.exports = informacoesGerais
*/