const { type } = require('express/lib/response')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test','root','',{
    host: "localhost",
    dialect: 'mysql'
})

// sequelize.authenticate().then(function(){
//     console.log("CONECTADO COM SUCESSO!")
// }).catch(function(erro){
//     console.log("ERRO NA CONEXÃO: " + erro)
// })

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: "UM TITULO QUALQUER",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac neque ante. Vivamus in porttitor turpis. Fusce a dui quis mi ultricies luctus. Donec sollicitudin eros neque, non porta enim convallis sit amet. "
// })

const Usuario = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "ANDERSON",
    sobrenome:"VANIN",
    idade:49,
    email:"anderson@email.com"
})

//Postagem.sync()
//Usuario.sync()