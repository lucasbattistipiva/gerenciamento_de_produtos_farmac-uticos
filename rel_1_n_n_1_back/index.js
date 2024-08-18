const express = require('express')
const app = express()
const cors = require('cors')
const PedidoCompra = require('./model/PedidoCompra')
const Fornecedor = require('./model/Fornecedor')
const Produto = require('./model/Produto')
const controllerProduto = require('./controller/controllerProduto')
const controllerFornecedor = require('./controller/controllerFornecedor')
const controllerPedidoCompra = require('./controller/controllerPedidoCompra')


const PORT = 3000
const hostname = 'localhost'


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())


app.post('/produto', controllerProduto.cadastrarProduto )
app.get('/produtos', controllerProduto.listarProduto)
app.get('/produto', controllerProduto.consultarProduto)
app.delete('/produto/:id', controllerProduto.deletarProduto)
app.put('/produto', controllerProduto.atualizarProduto)
app.post('/fornecedor', controllerFornecedor.cadastrarFornecedor )
app.get('/fornecedores', controllerFornecedor.listarFornecedor)
app.get('/fornecedor', controllerFornecedor.consultarFornecedor)
app.delete('/fornecedor/:id', controllerFornecedor.deletarFornecedor)
app.put('/fornecedor', controllerFornecedor.atualizarFornecedor)
app.post('/pedidocompra', controllerPedidoCompra.cadastrarPedidoCompra )
app.get('/pedidocompras', controllerPedidoCompra.listarPedidoCompra)
app.get('/pedidocompra', controllerPedidoCompra.consultarPedidoCompra)
app.delete('/pedidocompra/:id', controllerPedidoCompra.deletarPedidoCompra)
app.put('/pedidocompra', controllerPedidoCompra.atualizarPedidoCompra)




app.get('/', (req,res)=>{
    res.status(200).json({ message: 'Aplicação Rodando'})
})


app.listen(PORT,hostname, ()=>{
    console.log(`Servidor rodando em ${hostname}:${PORT}`)
})

