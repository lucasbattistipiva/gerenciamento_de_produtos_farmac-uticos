const conn = require('./db/conn')
const { PedidoCompra , Produto , Fornecedor} = require('./model/associacao')

async function syncDataBase() {
    try {
        await conn.sync({force:true})
        console.log("Syncado com sucesso!")        
    } catch (err) {
        console.error("Erro ao syncar",err);
    }
    finally{
        conn.close()
        console.log('fechando conexão');
        
    }
}

syncDataBase()