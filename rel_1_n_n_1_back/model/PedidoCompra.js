const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const PedidoCompra = db.define('pedidocompra',{
    codPedido:{
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    },
    nomePed:{
        type: DataTypes.STRING(45),
        allowNull:false
    },
    nomeForn:{
        type: DataTypes.STRING(45),
        allowNull:false
    },
    quantidadeProd:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fornecedorId: { 
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'fornecedores',
            key: 'codFornecedor'
        }
    },
    produtoId:{
        type: DataTypes.BIGINT,
        allowNull:false,
        references:{
            model: 'produtos',
            key: 'codProduto'
        }
    }
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'pedidocompras'
}) 

module.exports = PedidoCompra