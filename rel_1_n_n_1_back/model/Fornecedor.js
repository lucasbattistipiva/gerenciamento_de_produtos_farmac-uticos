const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Fornecedor = db.define('fornecedor',{
    codFornecedor:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nomeFornecedor:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cnpj:{
        type: DataTypes.STRING(18),
        allowNull: false,
        unique: true
    }
},{
    updatedAt: false,
    createdAt: false,
    tableName: 'fornecedores'
})

module.exports = Fornecedor