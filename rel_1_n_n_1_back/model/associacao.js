const Produto = require('./Produto')
const Fornecedor = require('./Fornecedor')
const PedidoCompra = require('./PedidoCompra')

//Produto pode ter varios pedidos
Produto.hasMany(PedidoCompra,{
    foreignKey: 'produtoId',
    as: 'pedidocompras',
    onDelete: 'CASCADE'
})
// Pedido pertence a um unico produto 
PedidoCompra.belongsTo(Produto,{
    foreignKey: 'produtoId',
    as: 'produtos',
    allowNull: false
})
//Fornecedor pode ter varios pedidos
Fornecedor.hasMany(PedidoCompra,{
    foreignKey: 'fornecedorId',
    as: 'pedidocompras',
    onDelete: 'CASCADE'
})
//Pedido pertence a um unico fornecedor
PedidoCompra.belongsTo(Fornecedor,{
    foreignKey: 'fornecedorId',
    as: 'fornecedores',
    allowNull: false
})

module.exports = { Produto, PedidoCompra, Fornecedor}