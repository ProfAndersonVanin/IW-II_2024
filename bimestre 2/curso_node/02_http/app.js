// SELECIONAR O MÓDULO http DO NODE
var http = require('http')

//ABRIR UM SERVIDOR HTTP
http.createServer(function(req,res){
    res.end('<b>OI 2C</b> BEM VINDOS AO SERVIDOR COM NODE JS')
}).listen(8081)

console.log('Servidor rodando....')