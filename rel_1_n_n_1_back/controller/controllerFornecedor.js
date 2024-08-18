const { raw } = require('mysql2')
const Fornecedor = require('../model/Fornecedor')

const cadastrarFornecedor = async (req,res)=>{
    const valores = req.body
    console.log(valores)
    try {
        const pesq = await Fornecedor.create(valores, {raw:true})
        res.status(201).json({message: 'Fornecedor Cadastrado!'})
    } catch (err) {
        console.error('Erro ao cadastrar o Fornecedor!',err)
        res.status(500).json({message: 'Erro ao cadastrar Fornecedor'})
    }
}

const listarFornecedor = async (req,res)=>{
    try {
        const pesq = await Fornecedor.findAll()
        res.status(200).json(pesq)
    } catch (err) {
        console.error('Erro ao listar Fornecedores',err)
        res.status(500).json({message: ' Erro ao listar Fornecedores'})
        
    }
}

const consultarFornecedor = async (req,res)=>{
    const valor = req.query
    console.log(valor)
    try {
        const pesq = await Fornecedor.findOne({where: { nomeFornecedor : valor.nomeFornecedor}})
        if(pesq === null){
            console.log('Fornecedor não encontrado no banco de dados')
            res.status(404).json({message: "Fornecedor não encontrado no banco de dados"})
        }else{
            console.log(pesq)
            res.status(200).json(pesq)
        }
    } catch (err) {
        console.error('Erro ao consultar o Fornecedor',err)
        res.status(500).json({message: 'Erro ao consultar o Fornecedor'})
    }
}

const deletarFornecedor = async (req,res)=>{
    const valor = req.params
    console.log(valor)
    try {
        const pesq = await Fornecedor.findByPk(valor.id)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "Fornecedor não existe banco de dados"})
        }else{
            await Fornecedor.destroy({where: {codFornecedor: valor.id}})
            res.status(200).json({message: "Fornecedor excluído do banco de dados"})
        }
    } catch (err) {
        console.error('Erro ao excluir o Fornecedor',err)
        res.status(500).json({message: 'Erro ao excluir o Fornecedor'})
    }
}

const atualizarFornecedor = async (req,res)=>{
    const valores = req.body
    console.log(valores)

    try {
        const pesq = await Fornecedor.findByPk(valores.codFornecedor)
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: 'Fornecedor não encontrado no banco de dados'}) 
        }else{
            await Fornecedor.update(valores, {where: { codFornecedor : valores.codFornecedor}})
            const pesq2 = await Fornecedor.findByPk(valores.codFornecedor)
            res.status(200).json(pesq2)
        }
    } catch (err) {
        console.error('Erro ao atualizar o Fornecedor!',err)
        res.status(500).json({message: 'Erro ao atualizar o Fornecedor'})
    }
    
}

module.exports = { cadastrarFornecedor, listarFornecedor, deletarFornecedor, consultarFornecedor, atualizarFornecedor}