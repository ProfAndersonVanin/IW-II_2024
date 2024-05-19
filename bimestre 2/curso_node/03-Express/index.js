const express = require('express')
const app = express()
// a variavel app será uma instância do módulo express

// transformando as variaveis que recebem os módulos em constantes
// você evita que eles sejam reescritas durante a execução do
// seu programa....

app.get("/",function(req,res){
    res.send("Seja bem vindo ao meu app - Agora fiz uma alteração")
})

app.get("/sobre",function(req,res){
    res.send("Pagina Sobre")
})

app.get("/blog",function(req,res){
    res.send("Pagina do Blog")
})

app.get("/ola/:cargo/:nome",function(req,res){
    res.send("<h1>Ola "+ req.params.nome+"</h1><h2> Seu cargo e: " + req.params.cargo+"</h2>")
    
})

// Abrindo um servidor com express
// ESTA FUNÇÃO TEM QUE SER SEMPRE A ÚLTIMA LINHA DO SEU CÓDIGO
app.listen(8081,function(){
    console.log("Servidor rodando na url http://localhost:8081")
})