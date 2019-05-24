const express = require('express')

//initializations
const app = express();

//settings
app.set('port', 3000)

//start server
app.listen(app.get('port'), ()=>{
    console.log('Servidor Rodando na porta', app.get('port'));
})