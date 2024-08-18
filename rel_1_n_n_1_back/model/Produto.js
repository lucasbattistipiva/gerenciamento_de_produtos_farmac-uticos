const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    codProduto : {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProd:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco:{
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    updatedAt: false,
    createdAt: false,
    tableName: 'produtos'
})
module.exports = Produto