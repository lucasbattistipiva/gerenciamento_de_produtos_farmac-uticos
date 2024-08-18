const { raw } = require('mysql2')
const PedidoCompra = require('../model/PedidoCompra')

const cadastrarPedidoCompra = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await PedidoCompra.create(valores, {raw:true})
        res.status(201).json({message: 'PedidoCompra Cadastrado!'})
    } catch (err) {
        console.error('Erro ao cadastrar o PedidoCompra!',err)
        res.status(500).json({message: 'Erro ao cadastrar PedidoCompra'})
    }
}

const listarPedidoCompra = async (req,res)=>{
    try {
        const pesq = await PedidoCompra.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Erro ao listar PedidoCompras',err)
        res.status(500).json({message: ' Erro ao listar PedidoCompras'})
        
    }
}

const consultarPedidoCompra = async (req,res)=>{
    const valor = req.query
    console.log(valor)
    try {
        const pesq = await PedidoCompra.findOne({where: { codPedido : valor.codPedido}})
        if(pesq === null){
            console.log('PedidoCompra não encontrado no banco de dados')
            res.status(404).json({message: "PedidoCompra não encontrado no banco de dados"})
        }else{
            console.log(pesq)
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('Erro ao consultar o PedidoCompra',err)
        res.status(500).json({message: 'Erro ao consultar o PedidoCompra'})
    }
}

const deletarPedidoCompra = async (req,res)=>{
    const valor = req.params
    console.log(valor)
    try {
        const pesq = await PedidoCompra.findByPk(valor.id)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "PedidoCompra não existe banco de dados"})
        }else{
            await PedidoCompra.destroy({where: {codPedido: valor.id}})
            res.status(200).json({message: "PedidoCompra excluído do banco de dados"})
        }
    } catch (err) {
        console.error('Erro ao excluir o PedidoCompra',err)
        res.status(500).json({message: 'Erro ao excluir o PedidoCompra'})
    }
}

const atualizarPedidoCompra = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    try {
        const pesq = await PedidoCompra.findByPk(valores.codPedido)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: 'PedidoCompra não encontrado no banco de dados'}) 
        }else{
            await PedidoCompra.update(valores, {where: { codPedido : valores.codPedido}})
            const pesq2 = await PedidoCompra.findByPk(valores.codPedido)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o PedidoCompra!',err)
        res.status(500).json({message: 'Erro ao atualizar o PedidoCompra'})
    }
    
}

module.exports = { cadastrarPedidoCompra, listarPedidoCompra, deletarPedidoCompra, consultarPedidoCompra, atualizarPedidoCompra}