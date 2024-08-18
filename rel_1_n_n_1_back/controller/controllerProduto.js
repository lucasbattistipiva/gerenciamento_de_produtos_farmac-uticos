const { raw } = require('mysql2')
const Produto = require('../model/Produto')

const cadastrarProduto = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Produto.create(valores, {raw:true})
        res.status(201).json({message: 'Produto Cadastrado!'})
    } catch (err) {
        console.error('Erro ao cadastrar o fabricante!',err)
        res.status(500).json({message: 'Erro ao cadastrar produto'})
    }
}

const listarProduto = async (req,res)=>{
    try {
        const pesq = await Produto.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Erro ao listar Produtos',err)
        res.status(500).json({message: ' Erro ao listar Produtos'})
        
    }
}

const consultarProduto = async (req,res)=>{
    const valor = req.query
    console.log(valor)
    try {
        const pesq = await Produto.findOne({where: { nomeProd : valor.nomeProd}})
        if(pesq === null){
            console.log('Produto não encontrado no banco de dados')
            res.status(404).json({message: "Produto não encontrado no banco de dados"})
        }else{
            console.log(pesq)
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('Erro ao consultar o Produto',err)
        res.status(500).json({message: 'Erro ao consultar o Produto'})
    }
}

const deletarProduto = async (req,res)=>{
    const valor = req.params
    console.log(valor)
    try {
        const pesq = await Produto.findByPk(valor.id)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "Produto não existe banco de dados"})
        }else{
            await Produto.destroy({where: {codProduto: valor.id}})
            res.status(200).json({message: "Produto excluído do banco de dados"})
        }
    } catch (err) {
        console.error('Erro ao excluir o Produto',err)
        res.status(500).json({message: 'Erro ao excluir o Produto'})
    }
}

const atualizarProduto = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    try {
        const pesq = await Produto.findByPk(valores.codProduto)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: 'Produto não encontrado no banco de dados'}) 
        }else{
            await Produto.update(valores, {where: { codProduto : valores.codProduto}})
            const pesq2 = await Produto.findByPk(valores.codProduto)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o Produto!',err)
        res.status(500).json({message: 'Erro ao atualizar o Produto'})
    }
    
}

module.exports = { cadastrarProduto, listarProduto, deletarProduto, consultarProduto, atualizarProduto}