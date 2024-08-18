# gerenciamento_de_produtos_farmac-uticos

## Descrição

Este projeto é uma aplicação que possui tanto backend quanto frontend, utilizando Node.js com Express, Sequelize, CORS, MySQL2 e dotenv. A aplicação segue uma arquitetura de relacionamento 1 para N e N para 1 entre os modelos Produto, PedidoCompra e Fornecedor. 

### Funcionalidades

A aplicação oferece as seguintes funcionalidades para os modelos Produto, PedidoCompra e Fornecedor:

- **Cadastrar**: Adicione novos registros.
- **Listar**: Liste todos os registros.
- **Consultar**: Consulte um registro específico.
- **Apagar**: Remova um registro.
- **Atualizar**: Modifique um registro existente.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construção da API.
- **Sequelize**: ORM para interagir com o banco de dados MySQL.
- **CORS**: Middleware para permitir solicitações de diferentes origens.
- **MySQL2**: Driver MySQL para Node.js.
- **dotenv**: Carregamento de variáveis de ambiente a partir de um arquivo `.env`.

## Configuração

### Passo 1: Clone o Repositório

```sh
git clone https://github.com/lucasbattistipiva/gerenciamento_de_produtos_farmac-uticos.git
cd gerenciamento_de_produtos_farmac-uticos
```
### Passo 2: Instale as dependências

Abra o terminal dentro do arquivo BACK-END e insira:
```sh
npm i
