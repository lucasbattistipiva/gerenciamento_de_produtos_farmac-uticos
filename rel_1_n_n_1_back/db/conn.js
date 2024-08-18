const {Sequelize} = require('sequelize')
require('dotenv').config()

const dbHost = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const sequelize = new Sequelize(dbHost,dbUser,dbPass,{
dialect:'mysql',
host: 'localhost'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão com o banco de dados com sucesso');
    }).catch((err)=>{
        console.error('Conexão mal sucedida')
    })


module.exports = sequelize